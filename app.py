from flask import Flask, render_template, request, redirect, session
import sqlite3

app = Flask(__name__)
app.secret_key = "secret123"

# Sample products
products = [
    {"id": 1, "name": "Laptop", "price": 50000},
    {"id": 2, "name": "Phone", "price": 20000},
    {"id": 3, "name": "Headphones", "price": 2000}
]

@app.route("/")
def home():
    return render_template("index.html", products=products)

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        session["user"] = request.form["username"]
        return redirect("/")
    return render_template("login.html")

@app.route("/cart")
def cart():
    return render_template("cart.html")

if __name__ == "__main__":
    app.run(debug=True)
