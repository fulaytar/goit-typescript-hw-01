type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  const existUser: User = {
    name: "Draco",
    surname: "Melfoi",
    email: "draco@example.com",
    password: "oldpassword",
  };
  return { ...existUser, ...initialValues };
}

const updateUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

export {};
