import Link from 'next/link';

import { userService } from 'services';

export default Home;

function Home() {
    return (
   
            <div >
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p>You&apos;re logged in with Next.js & JWT!!</p>
                <p><Link href="/users">Manage Users</Link></p>
            </div>
     
    );
}
