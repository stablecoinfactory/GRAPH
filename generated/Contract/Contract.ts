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

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get _token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  LOCKED(param0: Address): BigInt {
    let result = super.call("LOCKED", "LOCKED(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_LOCKED(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("LOCKED", "LOCKED(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MULT(): BigInt {
    let result = super.call("MULT", "MULT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MULT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MULT", "MULT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  STABLEFACT(param0: Address): BigInt {
    let result = super.call("STABLEFACT", "STABLEFACT(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_STABLEFACT(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("STABLEFACT", "STABLEFACT(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pendingBal(param0: Address): BigInt {
    let result = super.call("pendingBal", "pendingBal(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_pendingBal(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("pendingBal", "pendingBal(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pendingTime(param0: Address): BigInt {
    let result = super.call("pendingTime", "pendingTime(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_pendingTime(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingTime",
      "pendingTime(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class InitApprovalsCall extends ethereum.Call {
  get inputs(): InitApprovalsCall__Inputs {
    return new InitApprovalsCall__Inputs(this);
  }

  get outputs(): InitApprovalsCall__Outputs {
    return new InitApprovalsCall__Outputs(this);
  }
}

export class InitApprovalsCall__Inputs {
  _call: InitApprovalsCall;

  constructor(call: InitApprovalsCall) {
    this._call = call;
  }
}

export class InitApprovalsCall__Outputs {
  _call: InitApprovalsCall;

  constructor(call: InitApprovalsCall) {
    this._call = call;
  }
}

export class RunUSDCCall extends ethereum.Call {
  get inputs(): RunUSDCCall__Inputs {
    return new RunUSDCCall__Inputs(this);
  }

  get outputs(): RunUSDCCall__Outputs {
    return new RunUSDCCall__Outputs(this);
  }
}

export class RunUSDCCall__Inputs {
  _call: RunUSDCCall;

  constructor(call: RunUSDCCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RunUSDCCall__Outputs {
  _call: RunUSDCCall;

  constructor(call: RunUSDCCall) {
    this._call = call;
  }
}

export class RunUSDTCall extends ethereum.Call {
  get inputs(): RunUSDTCall__Inputs {
    return new RunUSDTCall__Inputs(this);
  }

  get outputs(): RunUSDTCall__Outputs {
    return new RunUSDTCall__Outputs(this);
  }
}

export class RunUSDTCall__Inputs {
  _call: RunUSDTCall;

  constructor(call: RunUSDTCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RunUSDTCall__Outputs {
  _call: RunUSDTCall;

  constructor(call: RunUSDTCall) {
    this._call = call;
  }
}
