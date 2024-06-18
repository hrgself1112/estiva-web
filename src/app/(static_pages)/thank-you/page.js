"use client"
import Layout from "@/components/headerMAin/layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Thankyou = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 8000);
  }) , [];

  return (
    <>
    <Layout>
 <section className="lg:p-20 overflow-x-hidden bgmainsexo md:p-12 p-12 max-sm:p-10   ">
<div className="container mx-auto">

<div className="flex flex-wrap">
<div className="w-full">

<div className=" wrapper-1 text-white text-[22px] text-center  ">
              <Image src="/thank-you-envelope.png" alt="thank-you-envelope" border={0} width={200} height={200} />
              <h1 className="mt-5">Thank you!</h1>
              <p>For contacting us, we will reply promptly</p>
              <p>Once your message is received. </p>
              <button className="go-home">
                <Link href="/">Home page</Link>
              </button>
            </div>

</div>

</div>

</div>

      </section>
      </Layout>
    </>
  );
};

export default Thankyou;
