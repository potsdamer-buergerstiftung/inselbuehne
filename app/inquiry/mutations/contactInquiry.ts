import { resolver } from "blitz"
import { contactRequestMailer } from "mailers/contactRequestMailer"
import { ContactInquiry } from "../validations"

export default resolver.pipe(resolver.zod(ContactInquiry), async (data) => {
  await contactRequestMailer(data).send()
})
