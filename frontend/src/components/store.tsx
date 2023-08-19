import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { usePublicClient, useWalletClient } from "wagmi";
import data from "./interface.json";
import { useState } from "react";

export default function StoreSection() {
  const [value, setValue] = useState<number>();

  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  async function writeNumber() {
    if (!walletClient) {
      console.log("wallets not connected");
      return;
    }

    const [address] = await walletClient.getAddresses();

    const { request } = await publicClient.simulateContract({
      abi: data.abi,
      address: `0x${data.address.substring(2)}`,
      functionName: "set",
      args: [value],
      account: address,
    });

    const hash = await walletClient.writeContract(request);
  }

  return (
    <>
      <p>Set the Number : <Input
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        placeholder="Enter the amount"
        type="number"
      /></p>
    
      
      <br />
      <Button onClick={writeNumber}>set</Button>
    </>
  );
}
