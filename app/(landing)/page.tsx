import { Button } from "@/components/ui/button"
import Link from "next/link"
function LandingPage() {
  return (
    <div>
        <p>LandingPage page</p>
        <Link href="/sign-in">
            <Button>sign in</Button>
        </Link>
        <Link href="/sign-up">
            <Button>sign up</Button>
        </Link>
    </div>
  )
}

export default LandingPage