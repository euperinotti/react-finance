import { SVGAttributes } from "react";
import { DecreaseIcon } from "./DecreaseIcon";
import { IncreaseIcon } from "./IncreaseIcon";
import { PlusIcon } from "./PlusIcon";
import { WalletIcon } from "./WalletIcon";

export const Icons = {
  decrease: (props: SVGAttributes<SVGSVGElement>) => (
    <DecreaseIcon {...props} />
  ),
  increase: (props: SVGAttributes<SVGSVGElement>) => (
    <IncreaseIcon {...props} />
  ),
  wallet: (props: SVGAttributes<SVGSVGElement>) => <WalletIcon {...props} />,
  plus: (props: SVGAttributes<SVGSVGElement>) => <PlusIcon {...props} />,
};
