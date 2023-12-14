// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::NftError;

#[derive(BorshSerialize, Debug)]
pub enum NftInstruction {
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` mint: [Mint] 
/// 2. `[writable]` daky: [Daky] 
/// 3. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - plan_id: [String] 
/// - name: [String] 
/// - short_description: [String] 
/// - price: [u64] 
	AddPlan(AddPlanArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` mint: [Mint] 
/// 2. `[writable]` daky: [Daky] 
/// 3. `[writable]` subscription: [Subscription] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 5. `[writable, signer]` funding: [AccountInfo] Funding account (must be a system account)
/// 6. `[writable]` assoc_token_account: [AccountInfo] Associated token account address to be created
/// 7. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 8. `[]` token_program: [AccountInfo] SPL Token program
/// 9. `[signer]` owner: [AccountInfo] The mint's minting authority.
/// 10. `[]` csl_spl_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplTokenProgram v0.0.0
/// 11. `[]` csl_spl_assoc_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplAssocTokenProgram v0.0.0
///
/// Data:
/// - plan_id: [String] 
/// - assoc_account: [Pubkey] 
	Mint(MintArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` mint: [Mint] 
/// 2. `[writable]` subscription: [Subscription] 
/// 3. `[writable, signer]` funding: [AccountInfo] Funding account (must be a system account)
/// 4. `[writable]` assoc_token_account: [AccountInfo] Associated token account address to be created
/// 5. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 6. `[]` system_program: [AccountInfo] System program
/// 7. `[]` token_program: [AccountInfo] SPL Token program
/// 8. `[writable]` source: [AccountInfo] The source account.
/// 9. `[writable]` destination: [AccountInfo] The destination account.
/// 10. `[signer]` authority: [AccountInfo] The source account's owner/delegate.
/// 11. `[]` csl_spl_assoc_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplAssocTokenProgram v0.0.0
/// 12. `[]` csl_spl_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplTokenProgram v0.0.0
///
/// Data:
/// - plan_id: [String] 
/// - assoc_account: [Pubkey] 
	Transfer(TransferArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` mint: [Mint] 
/// 2. `[writable]` subscription: [Subscription] 
/// 3. `[writable]` account: [Account] The account to burn from.
/// 4. `[signer]` owner: [AccountInfo] The account's owner/delegate.
/// 5. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 6. `[]` token_program: [AccountInfo] SPL Token program
/// 7. `[]` csl_spl_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplTokenProgram v0.0.0
///
/// Data:
/// - plan_id: [String] 
/// - assoc_account: [Pubkey] 
	Burn(BurnArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` mint: [Mint] 
/// 2. `[writable]` subscription: [Subscription] 
///
/// Data:
/// - plan_id: [String] 
/// - assoc_account: [Pubkey] 
/// - new_expiry: [u64] 
	ExtendExpiry(ExtendExpiryArgs),

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct AddPlanArgs {
	pub plan_id: String,
	pub name: String,
	pub short_description: String,
	pub price: u64,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MintArgs {
	pub plan_id: String,
	pub assoc_account: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct TransferArgs {
	pub plan_id: String,
	pub assoc_account: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct BurnArgs {
	pub plan_id: String,
	pub assoc_account: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct ExtendExpiryArgs {
	pub plan_id: String,
	pub assoc_account: Pubkey,
	pub new_expiry: u64,
}

impl NftInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(NftError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::AddPlan(AddPlanArgs::try_from_slice(rest).unwrap()),
			1 => Self::Mint(MintArgs::try_from_slice(rest).unwrap()),
			2 => Self::Transfer(TransferArgs::try_from_slice(rest).unwrap()),
			3 => Self::Burn(BurnArgs::try_from_slice(rest).unwrap()),
			4 => Self::ExtendExpiry(ExtendExpiryArgs::try_from_slice(rest).unwrap()),
			_ => return Err(NftError::InvalidInstruction.into())
        })
    }
}