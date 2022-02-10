import json
from flask import Flask
import sqlite3
import csv

print("[INFO] Starting server...")
app = Flask(__name__)
print("sqlite3 version:", sqlite3.version)
new_players = []

# open a csv file to read and then convert them into json
with open('data/players_data.csv', 'r') as f:
    reader = csv.reader(f)
    players_data = list(reader)
    for player in range(1, len(players_data)):
        new_player = {
            players_data[0][0]: players_data[player][0],
            players_data[0][1]: players_data[player][1],
            players_data[0][2]: players_data[player][2],
            players_data[0][3]: players_data[player][3],
            players_data[0][4]: players_data[player][4],
            players_data[0][5]: players_data[player][5],
            players_data[0][6]: players_data[player][6],
            players_data[0][7]: players_data[player][7],
            players_data[0][8]: players_data[player][8],
            players_data[0][11]: players_data[player][12],
            players_data[0][12]: players_data[player][13],
            players_data[0][13]: players_data[player][14],
            players_data[0][14]: players_data[player][15],
            players_data[0][15]: players_data[player][16],
            players_data[0][16]: players_data[player][17],
            players_data[0][17]: players_data[player][18],
            players_data[0][18]: players_data[player][19],
            players_data[0][19]: players_data[player][len(players_data[player]) - 1]
        }
        new_players.append(new_player)
        with open('data/players_data.json', 'w') as f:
            json.dump(new_players, f)


@app.route('/')
def main():
    return 'Hello World!'

@app.route("/players")
def get_all_players():
    players = []
    # open the json file and read it and return response as json
    with open('data/players_data.json', 'r') as f:
        players = json.load(f)
    return json.dumps(players)

if __name__ == '__main__':
    app.run(debug=True)
