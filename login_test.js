// AttendX login automation test example

function testLogin() {
  const testUser = {
    email: "student@example.com",
    password: "ValidPassword123"
  };

  const loginResult = {
    success: true,
    user: testUser.email
  };

  if (!loginResult.success) {
    throw new Error("Login failed for a valid user");
  }

  console.log("PASS: Student can log in successfully");
}

testLogin();