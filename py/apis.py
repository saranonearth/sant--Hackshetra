from flask import Flask,jsonify,request
import requests
import numpy as np
import pickle
import pytesseract
from PIL import Image
from utils import downloadImg
from keras.models import model_from_json

app  = Flask(__name__)

@app.route('/getHeartPredictions')
def get_HeartPredictions():
    file_path = "../resources/xgb.pickle.dat"
    xgb = pickle.load(open(file_path, "rb"))
    response = requests.get("YOUR URL HERE")
    response = response.json()
    X = response ## process the response
    prediction = xgb.predict(X)

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
    
    response = requests.get("YOUR URL HERE")
    img_url = response.json() ##Do something here
    downloadImg(img_url,'Pre')
    img_path = '../resources/input_XRay.jpg'
    
    json_o = open('model.json', 'r').read()
    model = model_from_json(json_o)
    json_o.close()
    model.load_weights('../resources/weights.h5')
    
    if K.image_data_format() == 'channels_first':
        input_shape = (3, img_width, img_height)
    else:
        input_shape = (img_width, img_height, 3)

    img = 0## do something here
    prediction = model.predict(img)

    return prediction
    



if __name__ == '__main__':
    app.run(debug=True)