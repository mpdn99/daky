#![cfg(feature = "test-sbf")]
mod add_plan {
    use assert_matches::assert_matches;
    use solana_program::instruction::{AccountMeta, Instruction};
    use solana_program::pubkey::Pubkey;
    use solana_program::{system_instruction, system_program};
    use solana_rpc_client::rpc_client::RpcClient;
    use solana_sdk::signer::keypair::Keypair;
    use solana_sdk::signer::Signer;
    use solana_sdk::transaction::Transaction;
    use solana_validator::test_validator::*;
    use std::str::FromStr;

    use crate::generated::entrypoint::process_instruction;
    use crate::generated::instructions::{ NftInstruction };
    use crate::test::create_account;

    #[test]
	fn test_transaction_is_ok() {
	    solana_logger::setup_with_default("solana_program_runtime=debug");
        let program_id = Pubkey::new_unique();

		let (test_validator, fee_payer_info) = TestValidatorGenesis::default()
			.add_program("nft", program_id)
			.start();
		let rpc_client = test_validator.get_rpc_client();

		let plan_id: String = Default::default();
		let name: String = Default::default();
		let short_description: String = Default::default();
		let price: u64 = Default::default();

		let mint_info = Keypair::new();
		let (daky_pubkey, _) = Pubkey::find_program_address(
			&[b"daky", mint_info.pubkey().as_ref(), plan_id.as_bytes().as_ref()],
			&program_id,
		);
		let accounts = vec![
			AccountMeta::new(fee_payer_info.pubkey(), true),
			AccountMeta::new_readonly(mint_info.pubkey(), false),
			AccountMeta::new(daky_pubkey, false),
			AccountMeta::new_readonly(system_program::id(), false),
		];
		let data = NftInstruction::AddPlan(crate::generated::instructions::AddPlanArgs{
			plan_id,
			name,
			short_description,
			price,
		});
		let signers = vec![
			&fee_payer_info,
        ];

		create_account(&rpc_client, &fee_payer_info, &mint_info, &Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap(), 82);

        let instruction = Instruction::new_with_borsh(program_id, &data, accounts.to_vec());
		let recent_blockhash = rpc_client.get_latest_blockhash().unwrap();
        let mut transaction = Transaction::new_with_payer(
            &[instruction],
            Some(&fee_payer_info.pubkey()),
        );
        transaction.sign(&signers, recent_blockhash);

	    assert_matches!(rpc_client.send_and_confirm_transaction(&transaction), Ok(_));
    }
}