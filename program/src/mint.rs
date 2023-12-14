use solana_program::sysvar::Sysvar;
use solana_program::{account_info::AccountInfo, clock::Clock};
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
	AccountPDA,
	Daky,
	Subscription,
};


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
pub fn mint(
	program_id: &Pubkey,
	for_initialize_mint_2: &[&AccountInfo],
	for_create: &[&AccountInfo],
	for_mint_to: &[&AccountInfo],
	for_set_authority: &[&AccountInfo],
	mint: &Account<spl_token::state::Mint>,
	daky: &mut AccountPDA<Daky>,
	subscription: &mut AccountPDA<Subscription>,
	funding: &AccountInfo,
	assoc_token_account: &AccountInfo,
	wallet: &AccountInfo,
	owner: &AccountInfo,
	plan_id: String,
	assoc_account: Pubkey,
) -> ProgramResult {
    // Implement your business logic here...

	subscription.data.plan_id = plan_id;
	subscription.data.name = daky.data.name.clone();
	subscription.data.expiry = 0;

	let clock = Clock::get()?;
	let now = clock.unix_timestamp as u64;
	let expiry = now + 30 * 24 * 60 * 60;
	subscription.data.expiry = expiry;


	csl_spl_token::src::cpi::initialize_mint_2(
		for_initialize_mint_2,
		0,
		*wallet.key,
		None,
	)?;

	csl_spl_assoc_token::src::cpi::create(
		for_create,
	)?;

	csl_spl_token::src::cpi::mint_to(
		for_mint_to,
		1,
	)?;

	csl_spl_token::src::cpi::set_authority(
		for_set_authority,
		0,
		None,
	)?;


    Ok(())
}