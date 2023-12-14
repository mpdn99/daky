// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import * as pda from "./pda";
import * as T from "./types";
import {
    Commitment,
    Connection,
    GetAccountInfoConfig,
    Keypair,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction,
    TransactionInstruction,
    TransactionSignature,
} from "@solana/web3.js";
import {deserialize, serialize} from "borsh";


let _programId: PublicKey;
let _connection: Connection;

export const initializeClient = (
    programId: PublicKey,
    connection: Connection
) => {
    _programId = programId;
    _connection = connection;
};

export enum NftInstruction {
/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` daky: {@link Daky} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - plan_id: {@link string} 
 * - name: {@link string} 
 * - short_description: {@link string} 
 * - price: {@link BigInt} 
 */
    AddPlan = 0,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` mint: {@link Mint} 
 * 2. `[writable]` daky: {@link Daky} 
 * 3. `[writable]` subscription: {@link Subscription} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 6. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 7. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 8. `[]` token_program: {@link PublicKey} SPL Token program
 * 9. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 10. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 */
    Mint = 1,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` subscription: {@link Subscription} 
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` system_program: {@link PublicKey} System program
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[writable]` source: {@link PublicKey} The source account.
 * 9. `[writable]` destination: {@link PublicKey} The destination account.
 * 10. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 12. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 */
    Transfer = 2,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` mint: {@link Mint} 
 * 2. `[writable]` subscription: {@link Subscription} 
 * 3. `[writable]` account: {@link Account} The account to burn from.
 * 4. `[signer]` owner: {@link PublicKey} The account's owner/delegate.
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` token_program: {@link PublicKey} SPL Token program
 * 7. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 */
    Burn = 3,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` subscription: {@link Subscription} 
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 * - new_expiry: {@link BigInt} 
 */
    ExtendExpiry = 4,
}

export type AddPlanArgs = {
    feePayer: PublicKey;
    mint: PublicKey;
    planId: string;
    name: string;
    shortDescription: string;
    price: bigint;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` daky: {@link Daky} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - plan_id: {@link string} 
 * - name: {@link string} 
 * - short_description: {@link string} 
 * - price: {@link BigInt} 
 */
export const addPlan = (args: AddPlanArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                plan_id: "string",
                name: "string",
                short_description: "string",
                price: "u64",
            },
        },
        {
            id: NftInstruction.AddPlan,
            plan_id: args.planId,
            name: args.name,
            short_description: args.shortDescription,
            price: args.price,
        }
    );

    const [dakyPubkey] = pda.deriveDakyPDA({
        mint: args.mint,
        planId: args.planId,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.mint, isSigner: false, isWritable: false},
            {pubkey: dakyPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` daky: {@link Daky} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - plan_id: {@link string} 
 * - name: {@link string} 
 * - short_description: {@link string} 
 * - price: {@link BigInt} 
 */
export const addPlanSendAndConfirm = async (
    args: Omit<AddPlanArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(addPlan({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type MintArgs = {
    feePayer: PublicKey;
    mint: PublicKey;
    funding: PublicKey;
    assocTokenAccount: PublicKey;
    wallet: PublicKey;
    owner: PublicKey;
    planId: string;
    assocAccount: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` mint: {@link Mint} 
 * 2. `[writable]` daky: {@link Daky} 
 * 3. `[writable]` subscription: {@link Subscription} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 6. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 7. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 8. `[]` token_program: {@link PublicKey} SPL Token program
 * 9. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 10. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 */
export const mint = (args: MintArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                plan_id: "string",
                assoc_account: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: NftInstruction.Mint,
            plan_id: args.planId,
            assoc_account: args.assocAccount.toBytes(),
        }
    );

    const [dakyPubkey] = pda.deriveDakyPDA({
        mint: args.mint,
        planId: args.planId,
    }, _programId);
    const [subscriptionPubkey] = pda.deriveSubscriptionPDA({
        mint: args.mint,
        planId: args.planId,
        assocAccount: args.assocAccount,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.mint, isSigner: true, isWritable: true},
            {pubkey: dakyPubkey, isSigner: false, isWritable: true},
            {pubkey: subscriptionPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: args.funding, isSigner: true, isWritable: true},
            {pubkey: args.assocTokenAccount, isSigner: false, isWritable: true},
            {pubkey: args.wallet, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
            {pubkey: args.owner, isSigner: true, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` mint: {@link Mint} 
 * 2. `[writable]` daky: {@link Daky} 
 * 3. `[writable]` subscription: {@link Subscription} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 6. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 7. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 8. `[]` token_program: {@link PublicKey} SPL Token program
 * 9. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 10. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 */
export const mintSendAndConfirm = async (
    args: Omit<MintArgs, "feePayer" |"mint" |"funding" |"owner"> & { 
        signers: { feePayer: Keypair,  mint: Keypair,  funding: Keypair,  owner: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(mint({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        mint: args.signers.mint.publicKey,
        funding: args.signers.funding.publicKey,
        owner: args.signers.owner.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.mint, args.signers.funding, args.signers.owner, ]
    );
};

export type TransferArgs = {
    feePayer: PublicKey;
    mint: PublicKey;
    funding: PublicKey;
    assocTokenAccount: PublicKey;
    wallet: PublicKey;
    source: PublicKey;
    destination: PublicKey;
    authority: PublicKey;
    planId: string;
    assocAccount: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` subscription: {@link Subscription} 
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` system_program: {@link PublicKey} System program
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[writable]` source: {@link PublicKey} The source account.
 * 9. `[writable]` destination: {@link PublicKey} The destination account.
 * 10. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 12. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 */
export const transfer = (args: TransferArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                plan_id: "string",
                assoc_account: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: NftInstruction.Transfer,
            plan_id: args.planId,
            assoc_account: args.assocAccount.toBytes(),
        }
    );

    const [subscriptionPubkey] = pda.deriveSubscriptionPDA({
        mint: args.mint,
        planId: args.planId,
        assocAccount: args.assocAccount,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.mint, isSigner: false, isWritable: false},
            {pubkey: subscriptionPubkey, isSigner: false, isWritable: true},
            {pubkey: args.funding, isSigner: true, isWritable: true},
            {pubkey: args.assocTokenAccount, isSigner: false, isWritable: true},
            {pubkey: args.wallet, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
            {pubkey: args.source, isSigner: false, isWritable: true},
            {pubkey: args.destination, isSigner: false, isWritable: true},
            {pubkey: args.authority, isSigner: true, isWritable: false},
            {pubkey: new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` subscription: {@link Subscription} 
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` system_program: {@link PublicKey} System program
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[writable]` source: {@link PublicKey} The source account.
 * 9. `[writable]` destination: {@link PublicKey} The destination account.
 * 10. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 12. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 */
export const transferSendAndConfirm = async (
    args: Omit<TransferArgs, "feePayer" |"funding" |"authority"> & { 
        signers: { feePayer: Keypair,  funding: Keypair,  authority: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(transfer({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        funding: args.signers.funding.publicKey,
        authority: args.signers.authority.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.funding, args.signers.authority, ]
    );
};

export type BurnArgs = {
    feePayer: PublicKey;
    mint: PublicKey;
    owner: PublicKey;
    wallet: PublicKey;
    planId: string;
    assocAccount: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` mint: {@link Mint} 
 * 2. `[writable]` subscription: {@link Subscription} 
 * 3. `[writable]` account: {@link Account} The account to burn from.
 * 4. `[signer]` owner: {@link PublicKey} The account's owner/delegate.
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` token_program: {@link PublicKey} SPL Token program
 * 7. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 */
export const burn = (args: BurnArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                plan_id: "string",
                assoc_account: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: NftInstruction.Burn,
            plan_id: args.planId,
            assoc_account: args.assocAccount.toBytes(),
        }
    );

    const [subscriptionPubkey] = pda.deriveSubscriptionPDA({
        mint: args.mint,
        planId: args.planId,
        assocAccount: args.assocAccount,
    }, _programId);
    const [accountPubkey] = pda.CslSplTokenPDAs.deriveAccountPDA({
        wallet: args.wallet,
        tokenProgram: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
        mint: args.mint,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.mint, isSigner: false, isWritable: true},
            {pubkey: subscriptionPubkey, isSigner: false, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: args.owner, isSigner: true, isWritable: false},
            {pubkey: args.wallet, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` mint: {@link Mint} 
 * 2. `[writable]` subscription: {@link Subscription} 
 * 3. `[writable]` account: {@link Account} The account to burn from.
 * 4. `[signer]` owner: {@link PublicKey} The account's owner/delegate.
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` token_program: {@link PublicKey} SPL Token program
 * 7. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 */
export const burnSendAndConfirm = async (
    args: Omit<BurnArgs, "feePayer" |"owner"> & { 
        signers: { feePayer: Keypair,  owner: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(burn({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        owner: args.signers.owner.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.owner, ]
    );
};

export type ExtendExpiryArgs = {
    feePayer: PublicKey;
    mint: PublicKey;
    planId: string;
    assocAccount: PublicKey;
    newExpiry: bigint;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` subscription: {@link Subscription} 
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 * - new_expiry: {@link BigInt} 
 */
export const extendExpiry = (args: ExtendExpiryArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                plan_id: "string",
                assoc_account: { array: { type: "u8", len: 32 } },
                new_expiry: "u64",
            },
        },
        {
            id: NftInstruction.ExtendExpiry,
            plan_id: args.planId,
            assoc_account: args.assocAccount.toBytes(),
            new_expiry: args.newExpiry,
        }
    );

    const [subscriptionPubkey] = pda.deriveSubscriptionPDA({
        mint: args.mint,
        planId: args.planId,
        assocAccount: args.assocAccount,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.mint, isSigner: false, isWritable: false},
            {pubkey: subscriptionPubkey, isSigner: false, isWritable: true},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` subscription: {@link Subscription} 
 *
 * Data:
 * - plan_id: {@link string} 
 * - assoc_account: {@link PublicKey} 
 * - new_expiry: {@link BigInt} 
 */
export const extendExpirySendAndConfirm = async (
    args: Omit<ExtendExpiryArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(extendExpiry({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

// Getters

export const getDaky = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Daky | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeDaky(deserialize(T.DakySchema, buffer.data) as Record<string, unknown>);
}

export const getSubscription = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Subscription | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeSubscription(deserialize(T.SubscriptionSchema, buffer.data) as Record<string, unknown>);
}
export module CslSplTokenGetters {
    export const getMint = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.CslSplTokenTypes.Mint | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.CslSplTokenTypes.decodeMint(deserialize(T.CslSplTokenTypes.MintSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getAccount = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.CslSplTokenTypes.Account | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.CslSplTokenTypes.decodeAccount(deserialize(T.CslSplTokenTypes.AccountSchema, buffer.data) as Record<string, unknown>);
    }
}



// Websocket Events

