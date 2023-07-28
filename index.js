//wrong code
//in this code you can't add a new test type without break the open closed principle

class wrongLaboratoryTest {

    constructor(name, price, typeTest) {
        this.name = name;
        this.price = price;
        this.typeTest = typeTest;
    }

    getDeliveryTime() {
        switch (this.typeTest) {
            case 'routine':

                return 'Result on the same day';

            case 'bacteriology':

                return 'Result on the five next days';

            default:

                throw new Error("We don't process this type of test: " + this.typeTest);
        }
    }
}

const wrongUrineCulture = new wrongLaboratoryTest('Urine Culture', 15, 'bacteriology');
console.log(wrongUrineCulture.name+': '+wrongUrineCulture.getDeliveryTime());
//const syphilis = new LaboratoryTest('Syphilis', 10, 'Serologic');
//console.log(syphilis.getDeliveryTime());


//----------------------right code-------------------------------

class LaboratoryTest {

    constructor(name, price, typeTest) {
        this.name = name;
        this.price = price;
        this.typeTest = typeTest;
    }

}

class RoutineTest extends LaboratoryTest {
    constructor(name, price, typeTest) {
        super(name, price, typeTest)
    }

    getDeliveryTime() {
        return 'Result on the same day';
    }

}

class BacteriologyTest extends LaboratoryTest {
    constructor(name, price, typeTest) {
        super(name, price, typeTest)
    }

    getDeliveryTime() {
        return 'Result on the five next days';
    }

}

//you can add a new test type

class ToxicologyTest extends LaboratoryTest {
    constructor(name, price, typeTest) {
        super(name, price, typeTest)
    }

    getDeliveryTime() {
        return 'Result on the next day';
    }

}

console.log('--------- Right code----------');

const hematology = new RoutineTest("Hematologia", 3, 'Rutina');
console.log(hematology.name+': '+hematology.getDeliveryTime());

const urineCulture = new BacteriologyTest('Urocultivo', 15, 'Bacteriología');
console.log(urineCulture.name+': '+urineCulture.getDeliveryTime());

const cocaine = new ToxicologyTest('Cocaina', 4, 'Toxicología');
console.log(cocaine.name+': '+cocaine.getDeliveryTime());