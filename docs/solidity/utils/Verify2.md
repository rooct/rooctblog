
```
import { ethers } from "ethers";

export async function getSignData(addr: string, originPerform: any) {
    let privateKey = "";
    let signer = new ethers.Wallet(privateKey);

    const Permit = [
        { name: 'owner', type: 'address' },
        { name: 'value', type: 'uint256' },
        { name: 'deadline', type: 'uint256' },
    ]
    let amount = ethers.utils.parseEther(String(originPerform));
    let deadLine = Math.round(new Date().getTime() / 1000) + 120;

    let result = await signer._signTypedData({
        version: '1',
        chainId: 256,
        verifyingContract: "0xF040A6A3CfeF6890Cd278A1017bdA077021cd11b",
    }, {
        Permit
    }, {
        owner: addr,
        value: amount,
        deadline: deadLine,
    });

    const signature = result.substring(2);
    const r = "0x" + signature.substring(0, 64);
    const s = "0x" + signature.substring(64, 128);
    const v = parseInt(signature.substring(128, 130), 16);
    return {
        "value": amount,
        "deadline": deadLine,
        "s": s,
        "r": r,
        "v": v
    }
}
```