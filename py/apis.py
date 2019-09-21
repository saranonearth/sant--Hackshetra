from flask import Flask,jsonify,request
import requests
import numpy as np
import pickle

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


if __name__ == '__main__':
    app.run(debug=True)