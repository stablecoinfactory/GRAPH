import { BigInt } from '@graphprotocol/graph-ts';

import { Deposit as deposit, Claim as claim } from '../generated/Contract/Contract';

import { Deposit, Claim } from '../generated/schema';

export function handleDeposit(event: deposit): void {
	let entity = new Deposit(event.transaction.hash.toHex());

	entity.token = event.params._token;
	entity.address = event.params._from;
	entity.amount = event.params._value;

	entity.save();
}

export function handleClaim(event: claim): void {
	let entity = new Claim(event.transaction.hash.toHex());

	entity.address = event.params._from;
	entity.amount = event.params._value;

	entity.save();
}
