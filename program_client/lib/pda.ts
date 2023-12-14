// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";

export type DakySeeds = {
    mint: PublicKey, 
    planId: string, 
};

export const deriveDakyPDA = (
    seeds: DakySeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("daky"),
            seeds.mint.toBuffer(),
            Buffer.from(seeds.planId, "utf8"),
        ],
        programId,
    )
};

export type SubscriptionSeeds = {
    mint: PublicKey, 
    planId: string, 
    assocAccount: PublicKey, 
};

export const deriveSubscriptionPDA = (
    seeds: SubscriptionSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("daky"),
            seeds.mint.toBuffer(),
            Buffer.from(seeds.planId, "utf8"),
            seeds.assocAccount.toBuffer(),
        ],
        programId,
    )
};

export module CslSplTokenPDAs {
    export type AccountSeeds = {
        wallet: PublicKey, 
        tokenProgram: PublicKey, 
        mint: PublicKey, 
    };
    
    export const deriveAccountPDA = (seeds: AccountSeeds): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                seeds.wallet.toBuffer(),
                seeds.tokenProgram.toBuffer(),
                seeds.mint.toBuffer(),
            ],
            new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
        )
    };
    
}

