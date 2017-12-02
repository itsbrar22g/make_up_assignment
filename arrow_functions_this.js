var data = {
	kick: function () {
		this.yelp = "Ouch!";
		setImmediate(() => console.log(this.yelp));
	}
};
data.kick();