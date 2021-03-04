import { AuthenticationError, Link, useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import { Flex, Box, Heading } from "@chakra-ui/react"

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box textAlign="center">
        <Heading fontFamily="heading">Log-in</Heading>

        <Form
          submitText="Login"
          schema={Login}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            try {
              await loginMutation(values)
              props.onSuccess?.()
            } catch (error) {
              if (error instanceof AuthenticationError) {
                return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
              } else {
                return {
                  [FORM_ERROR]:
                    "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
                }
              }
            }
          }}
        >
          <LabeledTextField name="email" label="Email" placeholder="Email" />
          <LabeledTextField
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
          />
          <div>
            <Link href="/forgot-password">
              <a>Forgot your password?</a>
            </Link>
          </div>
        </Form>

        <div style={{ marginTop: "1rem" }}>
          Or <Link href="/signup">Sign Up</Link>
        </div>
      </Box>
    </Flex>
  )
}

export default LoginForm
