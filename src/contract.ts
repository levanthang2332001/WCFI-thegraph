import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  BuyNFTs as BuyNFTsEvent,
  ListNFTs as ListNFTsEvent,
  Mint as MintEvent,
  TotalOwnerMint as TotalOwnerMintEvent,
  Transfer as TransferEvent,
  Transfer1 as Transfer1Event,
  UnListNFTs as UnListNFTsEvent,
  UpdatePrice as UpdatePriceEvent,
  Withdraw as WithdrawEvent
} from "../generated/Contract/Contract"
import {
  Token,
  TotalMint
} from "../generated/schema"


export function handleBuyNFTs(event: BuyNFTsEvent): void {
  // let token = Token.load(getHexStringFromEventParams(event.params._tokenId))
  // token!.price = null;
  // token!.sender 
  // token!.save();
}

export function handleListNFTs(event: ListNFTsEvent): void {
  let token = Token.load(getHexStringFromEventParams(event.params._tokenId));
  token!.price = event.params._price;
  token!.sender = event.params._from;
  token!.save();
}


export function handleMint(event: MintEvent): void {
  let token = Token.load(getHexStringFromEventParams(event.params._tokenId));

  if (!token) {
    token = new Token(getHexStringFromEventParams(event.params._tokenId))
    token.tokenId = event.params._tokenId;
    token.country = event.params._country;
  }

  token.country = event.params._country;
  token.save();
}

export function handleTotalOwnerMint(event: TotalOwnerMintEvent): void {
  let total = TotalMint.load(getHexStringFromEventParams(event.params._sum));

  total!.total = event.params._sum;
  total!.save();
}

export function handleTransfer(event: TransferEvent): void {
  // let token = Token.load(getHexStringFromEventParams(event.params._tokenId));

  // if (!token) {
  //   token = new Token(getHexStringFromEventParams(event.params._tokenId));
  //   token.country = new BigInt(0);
  // }
  // token.price = event.params._tokenId;
  // token.sender = event.params._from;
  // token.owner = event.params._to;
  // token.save();
}

export function handleTransfer1(event: Transfer1Event): void {
  let token = Token.load(getHexStringFromEventParams(event.params.tokenId));
  if (token === null) {
    token = new Token(getHexStringFromEventParams(event.params.tokenId))
    token.tokenId = event.params.tokenId;
    token.sender = event.params.from;
    token.owner = event.params.to;
    token.price = null
  }
  token.price = null
  token.tokenId = event.params.tokenId;
  token.sender = event.params.from;
  token.owner = event.params.to;
  token.save();
}

export function handleUnListNFTs(event: UnListNFTsEvent): void {
  let token = Token.load(getHexStringFromEventParams(event.params._tokenId));
  token!.price = null;
  token!.save();
}

export function handleUpdatePrice(event: UpdatePriceEvent): void {
  let token = Token.load(getHexStringFromEventParams(event.params._tokenId));
  token!.price = event.params._price;
  token!.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
}

function getHexStringFromEventParams(tokenId: BigInt): string {
  return tokenId.toHexString();
}