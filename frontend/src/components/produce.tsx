import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { usePublicClient, useWalletClient } from "wagmi";
import data from "./interface.json";
import { useState } from "react";

export default function ProduceSection() {
  const [value, setValue] = useState<number>();

  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  async function produceone() {
    if (!walletClient) {
      console.log("wallets not connected");
      return;
    }

    const [address] = await walletClient.getAddresses();

    const { request } = await publicClient.simulateContract({
      abi: data.abi,
      address: `0x${data.address.substring(2)}`,
      functionName: "produce",
      account: address,
    });

    const hash = await walletClient.writeContract(request);
  }

  return (
    <>
      <p>Produce one : <Button onClick={produceone}>produce</Button></p>     
    </>
  );
}