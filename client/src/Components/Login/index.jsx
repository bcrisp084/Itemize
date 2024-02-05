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
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";

export default function Login({ isOpen, onOpenChange }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });

  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginResponse = await login({
      variables: {
        email: user.email,
        password: user.password,
      },
    });

    const token = loginResponse.data.login.token;
    Auth.login(token);

    const newIsValid = {
      email: user.email !== "",
      password: user.password !== "",
    };

    setIsValid(newIsValid);

    if (!newIsValid.email || !newIsValid.password) {
      return;
    }
    onOpenChange();
  };

  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={() => {
          if (isOpen) {
            setIsValid({ email: true, password: true });
          }
          onOpenChange(!isOpen);
        }}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  isInvalid={!isValid.email}
                  errorMessage={isValid.email ? "" : "Email is required"}
                  onChange={handleChange}
                  name="email"
                  value={user.email}
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  isInvalid={!isValid.password}
                  errorMessage={isValid.password ? "" : "Password is required"}
                  onChange={handleChange}
                  name="password"
                  value={user.password}
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
                <Button color="primary" onClick={handleSubmit}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
