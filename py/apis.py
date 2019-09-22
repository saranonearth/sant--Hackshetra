from flask import Flask,jsonify,request
import requests
import numpy as np
import pickle
import pytesseract
from PIL import Image
from utils import downloadImg
from keras.models import model_from_json
from pymongo import MongoClient
import pandas as pd
from keras.preprocessing.image import ImageDataGenerator, load_img


app  = Flask(__name__)

features = ['age', 'sex', 'cp', 'trestbps',
            'chol', 'fbs', 'restecg',
            'thalach', 'exang', 'oldpeak',
            'slope', 'ca']
img_width, img_height = 150, 150

import pymongo
client = pymongo.MongoClient("mongodb+srv://saranonearth:s123@cluster0-4z81e.mongodb.net/sante?retryWrites=true&w=majority")
db = client.sante

@app.route('/getHeartPredictions')
def get_HeartPredictions():
    file_path = "../resources/xgb.pickle.dat"
    xgb = pickle.load(open(file_path, "rb"))
    collections = db['patients']
    doc = collections.find({})
    doc_dict = list()
    for i in doc:
        doc_dict.append(i)

    X_t = pd.DataFrame(columns=features)
    for entry in doc_dict:
        for col in features:
            X_t[col] = entry.get(col)

    prediction = xgb.predict(X_t)

    return prediction

@app.route('/getOcrResult')
def getOcrResult():
    typ= "XRay"
    response = requests.get("YOUR URL HERE")
    img_url = response.json() ##Do something here
    downloadImg(img_url,typ)
    img_path = '../resources/input_Pre.jpg'
    img = Image.open(img_path)
    text = pytesseract.image_to_string(img)

    return text

@app.route('/getXrayPredictions')
def getXrayPredictions():
    typ= "PRE"
    img_width, img_height = 150, 150
    
    collections = db['patients']
    doc = collections.find({})
    query = collections.find({ "email": { "$nin":[ ""]}})
    doc_dict,url = list(),list()
    for q in query:
        doc_dict.append(q)
    
    for entry in doc_dict:
        url.append(entry.get('img'))
    
    url_i = url[0]
    response = requests.get(url_i)
    downloadImg(img_url,'XRAY')
    img_path = '../resources/input_XRay.jpg'
    
    json_o = open('model.json', 'r').read()
    model = model_from_json(json_o)
    json_o.close()
    model.load_weights('../resources/weights.h5')
    
    if K.image_data_format() == 'channels_first':
        input_shape = (3, img_width, img_height)
    else:
        input_shape = (img_width, img_height, 3)

    train_datagen = ImageDataGenerator(
    rescale=1. / 255,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True)

    train_generator = train_datagen.flow_from_directory(
    img_path,
    target_size=(img_width, img_height),
    batch_size=batch_size,
    class_mode='binary')

    prediction = model.evaluate_generator(img)

    return prediction
    



if __name__ == '__main__':
    app.run(debug=True)