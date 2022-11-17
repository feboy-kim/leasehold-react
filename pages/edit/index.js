import Layout from "../../parts/layout";
import Head from "next/head";
import { initialease } from "../../models/data-helper";
import { useState } from "react";
import LeaseEdit from "../../parts/lease-edit";

function NewLease() {
    const [lease, setLease] = useState(initialease())
    return <Layout>
        <Head>
            <title>新建租约</title>
            <meta name="description" content="新建房屋租约" />
        </Head>
        {lease && <LeaseEdit lease={lease} onChanged={d => {
            setLease(prev => ({ ...prev, ...d }))
        }} />}
    </Layout>
}

export default NewLease
