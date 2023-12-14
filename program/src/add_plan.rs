use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
	AccountPDA,
	Daky,
};


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
pub fn add_plan(
	program_id: &Pubkey,
	mint: &Account<spl_token::state::Mint>,
	daky: &mut AccountPDA<Daky>,
	plan_id: String,
	name: String,
	short_description: String,
	price: u64,
) -> ProgramResult {
    // Implement your business logic here...

	daky.data.plan_id = plan_id;
	daky.data.name = name;
	daky.data.short_description = short_description;
	daky.data.price = price;
	daky.data.mint = *mint.info.key;

    Ok(())
}