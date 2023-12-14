// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

export interface Daky {
  planId: string;
  name: string;
  shortDescription: string;
  price: bigint;
  mint: PublicKey;
}

export const decodeDaky = (decoded: Decoded): Daky => ({
    planId: decoded["plan_id"] as string,
    name: decoded["name"] as string,
    shortDescription: decoded["short_description"] as string,
    price: decoded["price"] as bigint,
    mint: new PublicKey(decoded["mint"] as Uint8Array),
});

export const DakySchema: Schema =  {
    struct: {
        plan_id: "string",
        name: "string",
        short_description: "string",
        price: "u64",
        mint: { array: { type: "u8", len: 32 } },
    }
};

export interface Subscription {
  planId: string;
  name: string;
  expiry: bigint;
  mint: PublicKey;
}

export const decodeSubscription = (decoded: Decoded): Subscription => ({
    planId: decoded["plan_id"] as string,
    name: decoded["name"] as string,
    expiry: decoded["expiry"] as bigint,
    mint: new PublicKey(decoded["mint"] as Uint8Array),
});

export const SubscriptionSchema: Schema =  {
    struct: {
        plan_id: "string",
        name: "string",
        expiry: "u64",
        mint: { array: { type: "u8", len: 32 } },
    }
};

export module CslSplTokenTypes {
    /// Mint data.
    export interface Mint {
      mintAuthority: PublicKey;
      supply: bigint;
      decimals: number;
      isInitialized: boolean;
      freezeAuthority: PublicKey;
    }
    
    export const decodeMint = (decoded: Decoded): Mint => ({
        mintAuthority: new PublicKey(decoded["mint_authority"] as Uint8Array),
        supply: decoded["supply"] as bigint,
        decimals: decoded["decimals"] as number,
        isInitialized: decoded["is_initialized"] as boolean,
        freezeAuthority: new PublicKey(decoded["freeze_authority"] as Uint8Array),
    });
    
    export const MintSchema: Schema =  {
        struct: {
            mint_authority: { array: { type: "u8", len: 32 } },
            supply: "u64",
            decimals: "u8",
            is_initialized: "bool",
            freeze_authority: { array: { type: "u8", len: 32 } },
        }
    };
    
    /// Account data
    export interface Account {
      mint: PublicKey;
      owner: PublicKey;
      amount: bigint;
      delegate: PublicKey;
      state: number;
      isNative: bigint;
      delegatedAmount: bigint;
      closeAuthority: PublicKey;
    }
    
    export const decodeAccount = (decoded: Decoded): Account => ({
        mint: new PublicKey(decoded["mint"] as Uint8Array),
        owner: new PublicKey(decoded["owner"] as Uint8Array),
        amount: decoded["amount"] as bigint,
        delegate: new PublicKey(decoded["delegate"] as Uint8Array),
        state: decoded["state"] as number,
        isNative: decoded["is_native"] as bigint,
        delegatedAmount: decoded["delegated_amount"] as bigint,
        closeAuthority: new PublicKey(decoded["close_authority"] as Uint8Array),
    });
    
    export const AccountSchema: Schema =  {
        struct: {
            mint: { array: { type: "u8", len: 32 } },
            owner: { array: { type: "u8", len: 32 } },
            amount: "u64",
            delegate: { array: { type: "u8", len: 32 } },
            state: "u8",
            is_native: "u64",
            delegated_amount: "u64",
            close_authority: { array: { type: "u8", len: 32 } },
        }
    };
    
}


