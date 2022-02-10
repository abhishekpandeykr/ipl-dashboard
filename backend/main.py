import json
from flask import Flask, jsonify
import sqlite3
import csv
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
# from team_model import Player

app = Flask(__name__)
CORS(app, support_credentials=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///players.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Player(db.Model):
    list_sr_no = db.Column(db.String, primary_key=True)
    set_no = db.Column(db.String, nullable=False)
    set_2022 = db.Column(db.String, nullable=False)
    first_Name = db.Column(db.String, nullable=False)
    surname = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)
    state_association = db.Column(db.String, nullable=True)
    dob = db.Column(db.String, nullable=True)
    age = db.Column(db.Integer, nullable=True)
    test_caps = db.Column(db.Integer, nullable=True)
    odi_caps= db.Column(db.Integer, nullable=True)
    t20_caps = db.Column(db.Integer, nullable=True)
    ipl = db.Column(db.Integer, nullable=True)
    previous_IPLTeams = db.Column(db.String, nullable=True)
    team_2021 = db.Column(db.String, nullable=True)
    ipl_played_in_2021 = db.Column(db.Integer, nullable=True)
    C_U_A = db.Column(db.String, nullable=False)
    base_salary_in_lakhs = db.Column(db.Integer, nullable=False)

db.create_all()


class Player_data:


    def map_result(player):
        return {
                "first_Name": player.first_Name,
                "surname": player.surname,
                "country": player.country,
                "age": player.age,
                "test_caps": player.test_caps,
                "odi_caps": player.odi_caps,
                "t20_caps": player.t20_caps,
                "ipl": player.ipl,
                "ipl_played_in_2021": player.ipl_played_in_2021,
                "C_U_A": player.C_U_A,
                "base_salary_in_lakhs": player.base_salary_in_lakhs
        }

    def store_player_to_db():        
        # open a csv file to read and then convert them into json
        with open('data/players_data.csv', 'r') as f:
            reader = csv.reader(f)
            players_data = list(reader)
            for player in range(1, len(players_data)):
                new_player = {
                    "list_sr_no": players_data[player][0],
                    "set_no": players_data[player][1],
                    "set_2022": players_data[player][2],
                    "first_Name": players_data[player][3],
                    "surname": players_data[player][4],
                    "country": players_data[player][5],
                    "state_association": players_data[player][6],
                    "dob": players_data[player][7],
                    "age": players_data[player][8],
                    "test_caps": players_data[player][12],
                    "odi_caps": players_data[player][13],
                    "t20_caps": players_data[player][14],
                    "ipl": players_data[player][15],
                    "previous_IPLTeams": players_data[player][16],
                    "team_2021": players_data[player][17],
                    "ipl_played_in_2021": players_data[player][18],
                    "C_U_A": players_data[player][19],
                    "base_salary_in_lakhs": players_data[player][len(players_data[player]) - 1]
                }
                # save to database
                player_to_save_in_db = Player(**new_player)
                db.session.add(player_to_save_in_db)
                db.session.commit()
    

    @app.route("/players")
    def get_all_players():
        players = Player.query.all()
        all_players = []
        for player in players:
            all_players.append(Player_data.map_result(player))
        return jsonify(players = all_players)

    @app.route("/players/<string:country>")
    def get_players_by_country(country):
        players = Player.query.filter_by(country=country).all()
        all_players = []
        for player in players:
            all_players.append(Player_data.map_result(player))
        return jsonify(players = all_players)


if __name__ == '__main__':
    main_class = Player_data()
    app.run(debug=True)
