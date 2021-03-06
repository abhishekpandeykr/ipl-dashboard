class Player(db.Model):
    list_sr_no = db.Column(db.Integer, primary_key=True)
    set_no = db.Column(db.Integer, nullable=False)
    set_2022 = db.Column(db.String, nullable=False)
    first_Name = db.Column(db.String, nullable=False)
    surname = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)
    state_association = db.Column(db.String, nullable=True)
    dob = db.Column(db.String, nullable=True)
    age = db.Column(db.String, nullable=True)
    test_caps = db.Column(db.String, nullable=True)
    odi_caps= db.Column(db.String, nullable=True)
    t20_caps = db.Column(db.String, nullable=True)
    ipl = db.Column(db.String, nullable=True)
    previous_IPLTeams = db.Column(db.String, nullable=True)
    team_2021 = db.Column(db.String, nullable=True)
    ipl_played_in_2021 = db.Column(db.String, nullable=True)
    C_U_A = db.Column(db.String, nullable=False)
    base_salary_in_lakhs = db.Column(db.Integer, nullable=False)
