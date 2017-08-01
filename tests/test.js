const expect= require('chai').expect;
const myApp = require('../src/oopcode.js');

describe("OOP MODEL", function(){
    describe("creates a new house and calls some of its functions", function(){
		it ("should return number of rooms when called", function(){
			let whiteHouse = new myApp.House(3, 3, 1, 2, 1);
			let whiteRoom = whiteHouse.numberOfRooms();
            expect(whiteRoom).to.equal("there are 3 rooms");
		});
		it ("it should check that it adds two rooms", function(){
			let whiteHouse = new myApp.House(3, 3, 1, 2, 1);
			whiteHouse.addRooms(2);
			let whiteRoom = whiteHouse.numberOfRooms();
            expect(whiteRoom).to.equal("there are 5 rooms");
		});
		it ("should output correct value for build house method", function(){
			let whiteHouse = new myApp.House(3, 3, 1, 2, 1);
			let whiteRoom = whiteHouse.buildHouse();
            expect(whiteRoom).to.equal('your house has been built');
		});
		it ("it should check that it lists out feature of house", function(){
			let whiteHouse = new myApp.House(3, 3, 1, 2, 1);
			let whiteRoom = whiteHouse.houseFeatures();
            expect(whiteRoom).to.equal("This house has 3 rooms, 1 parlors, and 3 bathrooms");
	    });
	});

	describe("test that bungalow, storeyBuilding sub classes of house", function(){
		it ("bungalow should return number of rooms when called", function(){
			let whiteHouse = new myApp.Bungalow(2, 2, 1);
			let whiteRoom = whiteHouse.numberOfRooms();
            expect(whiteRoom).to.equal("there are 2 rooms");
		});
		it ("it should check that bungalow adds two rooms", function(){
			let whiteHouse = new myApp.Bungalow(2, 2, 1);
			whiteHouse.addRooms(2);
			let whiteRoom = whiteHouse.numberOfRooms();
            expect(whiteRoom).to.equal("there are 4 rooms");
		});
		it ("storeyBuilding should output correct value for build house method", function(){
			let whiteHouse = new myApp.StoreyBuilding(3, 3, 1, 3, 1);
			let whiteRoom = whiteHouse.buildHouse();
            expect(whiteRoom).to.equal('your house has been built');
		});
	});

    describe("test that bungalow, storeyBuilding, and SelfContained show polymorphism", function(){
        it ("it should check that it lists out feature of house for storybuilding", function(){
			let whiteHouse = new myApp.StoreyBuilding(3, 3, 1, 2, 1);
			let whiteRoom = whiteHouse.houseFeatures();
            expect(whiteRoom).to.equal("This house has 3 rooms, 1 parlors, 3 bathrooms and 2 floors with a penthouse");
        });

		it ("bungalow should clean room when called", function(){
			let whiteHouse = new myApp.Bungalow(2, 2, 1);
			let whiteRoom = whiteHouse.cleanRooms();
            expect(whiteRoom).to.equal("2 rooms have been cleaned");
		});
		it ("selfcontained should return number of bathrooms when called", function(){
			let whiteHouse = new myApp.SelfContained(1, 1);
			let whiteRoom = whiteHouse.hasBathroom();
            expect(whiteRoom).to.equal("there is a bathroom");
		});
    });

    describe("test that selfcontained shows multiple inheritance to house and bungalow", function(){
        it ("selfcontained should return number of rooms when called", function(){
			let whiteHouse = new myApp.SelfContained(1, 1);
			let whiteRoom = whiteHouse.numberOfRooms();
            expect(whiteRoom).to.equal("there are 1 rooms");
		});

		it ("self contained should clean room when called", function(){
			let whiteHouse = new myApp.SelfContained(1, 1);
			let whiteRoom = whiteHouse.cleanRooms();
            expect(whiteRoom).to.equal("1 rooms have been cleaned");
		});
    });
});

