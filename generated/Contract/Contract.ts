// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ApprovalForAllNft extends ethereum.Event {
  get params(): ApprovalForAllNft__Params {
    return new ApprovalForAllNft__Params(this);
  }
}

export class ApprovalForAllNft__Params {
  _event: ApprovalForAllNft;

  constructor(event: ApprovalForAllNft) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BatchMetadataUpdate extends ethereum.Event {
  get params(): BatchMetadataUpdate__Params {
    return new BatchMetadataUpdate__Params(this);
  }
}

export class BatchMetadataUpdate__Params {
  _event: BatchMetadataUpdate;

  constructor(event: BatchMetadataUpdate) {
    this._event = event;
  }

  get _fromTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _toTokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BuyNFTs extends ethereum.Event {
  get params(): BuyNFTs__Params {
    return new BuyNFTs__Params(this);
  }
}

export class BuyNFTs__Params {
  _event: BuyNFTs;

  constructor(event: BuyNFTs) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ListNFTs extends ethereum.Event {
  get params(): ListNFTs__Params {
    return new ListNFTs__Params(this);
  }
}

export class ListNFTs__Params {
  _event: ListNFTs;

  constructor(event: ListNFTs) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MetadataEvent extends ethereum.Event {
  get params(): MetadataEvent__Params {
    return new MetadataEvent__Params(this);
  }
}

export class MetadataEvent__Params {
  _event: MetadataEvent;

  constructor(event: MetadataEvent) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get description(): string {
    return this._event.parameters[2].value.toString();
  }

  get country(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MetadataUpdate extends ethereum.Event {
  get params(): MetadataUpdate__Params {
    return new MetadataUpdate__Params(this);
  }
}

export class MetadataUpdate__Params {
  _event: MetadataUpdate;

  constructor(event: MetadataUpdate) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _country(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TotalOwnerMint extends ethereum.Event {
  get params(): TotalOwnerMint__Params {
    return new TotalOwnerMint__Params(this);
  }
}

export class TotalOwnerMint__Params {
  _event: TotalOwnerMint;

  constructor(event: TotalOwnerMint) {
    this._event = event;
  }

  get _sum(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _date(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Transfer1 extends ethereum.Event {
  get params(): Transfer1__Params {
    return new Transfer1__Params(this);
  }
}

export class Transfer1__Params {
  _event: Transfer1;

  constructor(event: Transfer1) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UnListNFTs extends ethereum.Event {
  get params(): UnListNFTs__Params {
    return new UnListNFTs__Params(this);
  }
}

export class UnListNFTs__Params {
  _event: UnListNFTs;

  constructor(event: UnListNFTs) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UpdatePrice extends ethereum.Event {
  get params(): UpdatePrice__Params {
    return new UpdatePrice__Params(this);
  }
}

export class UpdatePrice__Params {
  _event: UpdatePrice;

  constructor(event: UpdatePrice) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get _account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract___metadataResult {
  value0: string;
  value1: string;
  value2: BigInt;

  constructor(value0: string, value1: string, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getName(): string {
    return this.value0;
  }

  getDescription(): string {
    return this.value1;
  }

  getCountry(): BigInt {
    return this.value2;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  _metadata(param0: BigInt): Contract___metadataResult {
    let result = super.call(
      "_metadata",
      "_metadata(uint256):(string,string,uint120)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract___metadataResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toBigInt()
    );
  }

  try__metadata(
    param0: BigInt
  ): ethereum.CallResult<Contract___metadataResult> {
    let result = super.tryCall(
      "_metadata",
      "_metadata(uint256):(string,string,uint120)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract___metadataResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toBigInt()
      )
    );
  }

  _mintCount(param0: Address): i32 {
    let result = super.call("_mintCount", "_mintCount(address):(uint8)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toI32();
  }

  try__mintCount(param0: Address): ethereum.CallResult<i32> {
    let result = super.tryCall("_mintCount", "_mintCount(address):(uint8)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkOwnerOfNFT(tokenId: BigInt): Address {
    let result = super.call(
      "checkOwnerOfNFT",
      "checkOwnerOfNFT(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toAddress();
  }

  try_checkOwnerOfNFT(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "checkOwnerOfNFT",
      "checkOwnerOfNFT(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMetadata(tokenId: BigInt): string {
    let result = super.call("getMetadata", "getMetadata(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_getMetadata(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getMetadata", "getMetadata(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPaused(): boolean {
    let result = super.call("isPaused", "isPaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_isPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaused", "isPaused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BuyNFTsCall extends ethereum.Call {
  get inputs(): BuyNFTsCall__Inputs {
    return new BuyNFTsCall__Inputs(this);
  }

  get outputs(): BuyNFTsCall__Outputs {
    return new BuyNFTsCall__Outputs(this);
  }
}

export class BuyNFTsCall__Inputs {
  _call: BuyNFTsCall;

  constructor(call: BuyNFTsCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BuyNFTsCall__Outputs {
  _call: BuyNFTsCall;

  constructor(call: BuyNFTsCall) {
    this._call = call;
  }
}

export class CheckTotalOwerMintCall extends ethereum.Call {
  get inputs(): CheckTotalOwerMintCall__Inputs {
    return new CheckTotalOwerMintCall__Inputs(this);
  }

  get outputs(): CheckTotalOwerMintCall__Outputs {
    return new CheckTotalOwerMintCall__Outputs(this);
  }
}

export class CheckTotalOwerMintCall__Inputs {
  _call: CheckTotalOwerMintCall;

  constructor(call: CheckTotalOwerMintCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CheckTotalOwerMintCall__Outputs {
  _call: CheckTotalOwerMintCall;

  constructor(call: CheckTotalOwerMintCall) {
    this._call = call;
  }
}

export class GetMetadataNFTsCall extends ethereum.Call {
  get inputs(): GetMetadataNFTsCall__Inputs {
    return new GetMetadataNFTsCall__Inputs(this);
  }

  get outputs(): GetMetadataNFTsCall__Outputs {
    return new GetMetadataNFTsCall__Outputs(this);
  }
}

export class GetMetadataNFTsCall__Inputs {
  _call: GetMetadataNFTsCall;

  constructor(call: GetMetadataNFTsCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GetMetadataNFTsCall__Outputs {
  _call: GetMetadataNFTsCall;

  constructor(call: GetMetadataNFTsCall) {
    this._call = call;
  }
}

export class ListNFTsCall extends ethereum.Call {
  get inputs(): ListNFTsCall__Inputs {
    return new ListNFTsCall__Inputs(this);
  }

  get outputs(): ListNFTsCall__Outputs {
    return new ListNFTsCall__Outputs(this);
  }
}

export class ListNFTsCall__Inputs {
  _call: ListNFTsCall;

  constructor(call: ListNFTsCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ListNFTsCall__Outputs {
  _call: ListNFTsCall;

  constructor(call: ListNFTsCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeMintCall extends ethereum.Call {
  get inputs(): SafeMintCall__Inputs {
    return new SafeMintCall__Inputs(this);
  }

  get outputs(): SafeMintCall__Outputs {
    return new SafeMintCall__Outputs(this);
  }
}

export class SafeMintCall__Inputs {
  _call: SafeMintCall;

  constructor(call: SafeMintCall) {
    this._call = call;
  }
}

export class SafeMintCall__Outputs {
  _call: SafeMintCall;

  constructor(call: SafeMintCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetApprovalForAllNFTCall extends ethereum.Call {
  get inputs(): SetApprovalForAllNFTCall__Inputs {
    return new SetApprovalForAllNFTCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllNFTCall__Outputs {
    return new SetApprovalForAllNFTCall__Outputs(this);
  }
}

export class SetApprovalForAllNFTCall__Inputs {
  _call: SetApprovalForAllNFTCall;

  constructor(call: SetApprovalForAllNFTCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllNFTCall__Outputs {
  _call: SetApprovalForAllNFTCall;

  constructor(call: SetApprovalForAllNFTCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnListNFTsCall extends ethereum.Call {
  get inputs(): UnListNFTsCall__Inputs {
    return new UnListNFTsCall__Inputs(this);
  }

  get outputs(): UnListNFTsCall__Outputs {
    return new UnListNFTsCall__Outputs(this);
  }
}

export class UnListNFTsCall__Inputs {
  _call: UnListNFTsCall;

  constructor(call: UnListNFTsCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UnListNFTsCall__Outputs {
  _call: UnListNFTsCall;

  constructor(call: UnListNFTsCall) {
    this._call = call;
  }
}

export class UpdateListingPriceCall extends ethereum.Call {
  get inputs(): UpdateListingPriceCall__Inputs {
    return new UpdateListingPriceCall__Inputs(this);
  }

  get outputs(): UpdateListingPriceCall__Outputs {
    return new UpdateListingPriceCall__Outputs(this);
  }
}

export class UpdateListingPriceCall__Inputs {
  _call: UpdateListingPriceCall;

  constructor(call: UpdateListingPriceCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateListingPriceCall__Outputs {
  _call: UpdateListingPriceCall;

  constructor(call: UpdateListingPriceCall) {
    this._call = call;
  }
}

export class WithdrawAllCall extends ethereum.Call {
  get inputs(): WithdrawAllCall__Inputs {
    return new WithdrawAllCall__Inputs(this);
  }

  get outputs(): WithdrawAllCall__Outputs {
    return new WithdrawAllCall__Outputs(this);
  }
}

export class WithdrawAllCall__Inputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}

export class WithdrawAllCall__Outputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}
