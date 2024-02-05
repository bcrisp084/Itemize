/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import MailIcon from "../MailIcon";
import LockIcon from "../LockIcon";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import { useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";

export default function Signup({ isOpen, onOpenChange }) {
  const [addUser] = useMutation(ADD_USER);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const isInvalid = () => {
    const newValidUser = {
      firstName: user.firstName.trim() !== "",
      lastName: user.lastName.trim() !== "",
      email: user.email.trim() !== "",
      password: user.password.trim() !== "",
    };

    setIsValid(newValidUser);

    return (
      !newValidUser.firstName ||
      !newValidUser.lastName ||
      !newValidUser.email ||
      !newValidUser.password
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signupResponse = await addUser({
        variables: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        },
      });

      console.log(signupResponse);

      const token = signupResponse.data.addUser.token;
      Auth.login(token);

      navigate("/");

      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

      setIsValid({
        firstName: true,
        lastName: true,
        email: true,
        password: true,
      });

      console.log("User added successfully");

      return;
    } catch (error) {
      console.error("Error adding user:", error);
    }

    if (isInvalid()) {
      return;
    }

    onOpenChange();
  };

  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={(value) => {
          if (!value) {
            setUser({
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            });

            setIsValid({
              firstName: true,
              lastName: true,
              email: true,
              password: true,
            });
          }

          onOpenChange(value);
        }}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="bordered"
                  onChange={handleChange}
                  name="firstName"
                  value={user.firstName}
                  isInvalid={!isValid.firstName}
                  errorMessage={
                    isValid.firstName ? "" : "First Name is required"
                  }
                />
                <Input
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="bordered"
                  onChange={handleChange}
                  name="lastName"
                  value={user.lastName}
                  isInvalid={!isValid.lastName}
                  errorMessage={isValid.lastName ? "" : "Last Name is required"}
                />
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  onChange={handleChange}
                  name="email"
                  value={user.email}
                  isInvalid={!isValid.email}
                  errorMessage={isValid.email ? "" : "Email is required"}
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  onChange={handleChange}
                  name="password"
                  value={user.password}
                  isInvalid={!isValid.password}
                  errorMessage={isValid.password ? "" : "Password is required"}
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={handleSubmit}
                  onPress={() => !isInvalid() && onClose()}
                >
                  Sign up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
