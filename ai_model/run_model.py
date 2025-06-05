import joblib

model = joblib.load('model.pkl')

def predict_fire(temp, smoke, flame):
    return model.predict([[temp, smoke, flame]])[0]

print(predict_fire(55, 800, 1))  # example test
