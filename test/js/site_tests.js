
test("isEmail should return false for an invalid email address", function() {
  ok( ! IsEmail("foo.bar"), "foo.bar is not an email address.");
});

test("IsEmail should return true for a valid email address", function() {
  ok( IsEmail("foo@bar.baz"), "foo@bar.baz is an email address.");
});

test("numValid should return true for 9 digit strings", function() {
  ok( numValid("123456789"), "123456789 is a valid number");
});

test("numValid should return false for 9 character strings", function() {
  ok( numValid("aaaaaaaaa"), "aaaaaaaaa is not a valid number");
});

test("numValid should return false for strings that contain digits and non digits", function() {
  ok( ! numValid("42.00"), "42.00 isn't a number");
});

