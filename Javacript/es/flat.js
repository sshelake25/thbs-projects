let obj = {
    name: "thbs",
    sayLater: function () {
        console.log(this)
        console.log(`${this.name}`);
    }
};

obj.sayLater();

