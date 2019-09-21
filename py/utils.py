import pytesseract
from PIL import Image
import pymongo
from xgboost  import XGBClassifier
import pandas as pd
import requests
from sklearn.model_selection import train_test_split

def get_ocr_output(img_path):
    img =  Image.open(img_path)
    text = pytesseract.image_to_string(img)
    
    return text


class dataPipeline:
    def __init__(self,data_path,cols_to_process):
        self.data = pd.read_csv(data_path)
        self.cols_to_process = cols_to_process
        self.xgb_model = XGBClassifier(objective ='binary:logistic',random_state=42)
    

    def normalize_data(self,xi,minm,maxm,cols):
        return (xi-min)/(maxm-minm)

    def preprocess_data(self):
        for col in self.cols_to_process:

            minm = self.data[col].min()
            maxm = self.data[col].max()
            
            for entry in self.data[col]:
                entry  =  (entry-minm)/(maxm-minm)
            
        y = self.data['target']
        X = self.data.drop(labels=['target'])
        X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2, random_state=42)

        return (X_train,X_test,y_train,y_test)

    def fit_xgb(self,preprocess_data):

        X_train,X_test,y_train,y_test = preprocess_data()
        xgb_fitted  = self.xgb_model.fit(X_train,y_train)

        return xgb_fitted

def downloadImg(url,typ):
    if typ=='PRE':
        s= 'Pre'
    else:
        s="XRay"
    with open('../resources/input_{s}.jpg', 'wb') as handle:
            response = requests.get(url, stream=True)
            for block in response.iter_content(1024):
                if not block:
                    break
                handle.write(block)