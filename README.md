## 🥹 Welcome To GIFeels 🥹
We have created a simple mood tracker to support mental health. On the homepage, the user is invited to select the gif that best represents their mood. Then they are taken to a page offering them a choice between an inspirational quote or joke to improve their mindset. They are then given the option to save this. If they select save, they will be invited to log in (or register). Once logged in, they can save their mood and joke/quote. They will be invited to journal their thoughts for the day and save them. After saving, they will be shown their overview for the month, giving a summary of their emotions and letting them view entries for individual days. 

This app is a Python-Flask app using MySQL for the database. The front-end uses Jinja, HTML, CSS and JavaScript

## Project Structure: 

```mermaid
flowchart TD
      A[User]<--Collect data, show results-->B[Web Client - HTML, CSS, Jinja, Javascript & Ajax];
      B[Web Client - HTML, CSS, Jinja, Javascript & Ajax]<--HTTP Request / Response in JSON / HTTP-->C[Server -API Endpoints with Python-Flask];
      C[Server - API Endpoints with Python-Flask]<--CRUD Operations using SQLAlchemy-->D[(MySQL Database)];
      C[Server - Web Client]<--GET Request / Response-->E[External APIs - Giphy, Gemini, icanhazdadjoke, Zen Quotes];
    
    class E cloud;
    
    classDef cloud fill:#f0f0f0,stroke:#333,stroke-width:2px;
```

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

### You will need:

- A virtual environment on your IDE to install requirements from requirements.txt
- MySQL Workbench for the database (or equivalent)
- A developer API key from the [Giphy developers website](https://developers.giphy.com/)
- Create an account with Google Cloud using their free trial and follow [this guide](/https://support.google.com/cloud/answer/6158849?hl=en&ref_topic=3473162&sjid=2552074629382520305-EU) to generate the correct credentials for using Oauth. 


### Setup 

In a rush? Run the app without Google OAuth and skip step 3 below. You will need to change app.run on [run.py](/run.py) to `app.run(debug=True), host='0.0.0.0', port=5500)`. Please be aware certain endpoints related to OAuth will not function correctly. 

1. Create a new file at root level called .env. Copy and paste the template from [template_env](/template_env) and add your GIPHY API key, Google Auth Client Id, Key and Domain, MySQL user and password where indicated. (Using .env will keep your personal information secure)
2. Create and activate a virtual environment, then install all requirements from [requirements.txt](/requirements.txt)
3. Set up an SSL certificate using the terminal commands below (providing information when prompted), and save these in the directory [certs](/certs). Check these are correctly added to your .gitignore.

`$ pip install pyopenssl`

`openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365`

4. Navigate to MySQL Workbench or equivalent GUI and run the following command: 

`CREATE DATABASE Mood_Tracker`

5. Run the following commands on terminal to migrate the database using Flask-Migrate:

`flask db upgrade`

6. Run [run.py](/run.py) to launch the app 

### Running the app
By running app.py in your IDE you will be able to launch https://127.0.0.1:443 (or http://127.0.0.1:5500 if not using HTTPS) and go to the homepage of the app.

Please note: the front-end design has been optimised for Google Chrome Browser and for the best experience, we'd recommend using this.

The app will guide you through choosing how you feel and offer a choice for a joke or a quote. It will then allow you to add a journal entry.

You are able to visit the pages without logging into the app, however this will not allow you to save entries or have an overview of the recorded entries.

You can login as one of the mock users created, or register your own user following the instructions on screen.

### Mock users credentials
1. Mock user who is registered and has database entries from 01/05/2024 to 13/06/2024:\
Username: JoDoe\
Password: password123
2. Mock user who is registered only:\
Username: LSmith\
Password: hello123

### Developers

Laura: https://github.com/Laura-Kam \
Fabi: https://github.com/Fabi-P \
Rachel: https://github.com/Rachel-Tookey \
Alyssa: https://github.com/lyscodes \
Hannah: https://github.com/HannahTInsleyMcRink
