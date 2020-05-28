test("Correct examples", function (assert) {
    assert.equal(isValidPlate("1234VNM"), true, "NORMAL CASE 1");
    assert.equal(isValidPlate("0345twx"), true, "NORMAL CASE 2");
});

test("Invalid arguments", function (assert) {
    assert.equal(isValidPlate("J234DBC"), false, "SOME OF THE FIRST FOUR CHARACTERS ARE NOT A DIGIT");
    assert.equal(isValidPlate("11234DB1"), false, "SOME OF THE LAST CHARACTERS ARE NOT A LETTER");   
    assert.equal(isValidPlate("ZBC1234"), false, "BAD ORDENATION (FIRST LETTERS)");
    assert.equal(isValidPlate("Z1CB234"), false, "BAD ORDENATION (MIX NUMBERS WITH LETTERS)");
});

test("Invalid characters", function (assert) {
    assert.equal(isValidPlate("1234AEI"), false, "VOWELS");
    assert.equal(isValidPlate("1234QQJ"), false, "NOT ALLOWED CHARACTER Q");
    assert.equal(isValidPlate("1234LOÑ"), false, "NOT ALLOWED CHARACTER Ñ");
    assert.equal(isValidPlate("1234&HE"), false, "NOT ALLOWED CHARACTER/S IN LETTERS");
    assert.equal(isValidPlate("$3.4EHE"), false, "NOT ALLOWED CHARACTER/S IN NUMBERS");
});