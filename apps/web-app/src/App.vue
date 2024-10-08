<template>
  <div class="min-h-screen">
    <div class="flex flex-col max-w-[750px] mx-auto py-10">
      <div class="max-w-50 flex flex-col gap-4">
        <button class="btn btn-primary" @click="connect" v-if="!address">
          Connect Mizu Wallet
        </button>
        <template v-else>
          <span class="flex items-center gap-2">
            <button class="btn btn-primary">{{ ShortAddress(address) }}</button>
            <button class="btn btn-primary" @click="copy(address)">Copy Address</button>
            <button class="btn btn-primary" @click="disconnect">Disconnect</button>
          </span>
        </template>
      </div>

      <div class="flex items-center gap-4 mt-4">
        <label class="label cursor-pointer flex items-center gap-2">
          <span class="label-text">Auto Connect</span>
          <input
            type="checkbox"
            class="toggle toggle-primary"
            @change="(evt: any) => (autoconnect = !!evt.target?.checked)"
            :checked="autoconnect"
          />
        </label>

        <label class="label cursor-pointer flex items-center gap-2">
          <span class="label-text">Network:</span>
          <!-- <select class="select select-bordered w-full max-w-xs" v-model="network">
            <option value="mainnet">Mainnet</option>
            <option value="testnet">Testnet</option>
          </select> -->
          {{ network }}
        </label>
      </div>

      <div class="p-5 border-1 border-solid border-black rounded-4 mt-4 flex flex-col gap-4">
        <h2>Single Signer</h2>
        <button class="btn btn-primary" :disabled="!address" @click="submitHandler">
          Submit And Sign Transaction
        </button>
      </div>
    </div>

    <div role="alert" class="alert absolute left-10 right-10 bottom-5 !w-auto" v-if="hashURL">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span class="break-all text-sm">
        View on Explorer:
        <a class="text-blue-600 underline" :href="hashURL" target="_blank">{{ hashURL }}</a>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { WalletCore } from '@aptos-labs/wallet-adapter-core';
  import { MizuWallet } from '@mizuwallet-sdk/aptos-wallet-adapter';
  import { useStorage } from '@vueuse/core';
  import { computed, ref } from 'vue';
  import { copy, ShortAddress } from './utils';

  const APTOS_COIN = '0x1::aptos_coin::AptosCoin';
  const network = ref('mainnet');

  const hashURL = computed(() =>
    hash.value ? `https://explorer.aptoslabs.com/txn/${hash.value}?network=${network.value}` : '',
  );

  // new id
  const wallets = computed(() => [
    new MizuWallet({
      appId:
        network.value === 'testnet'
          ? 'dfa1794e-8412-4c9c-b28d-25ecd4c0b52f'
          : '7f3578d5-d0d1-4e05-a9a8-2b3f02e3e6f0',
      network: network.value as never,
      manifestURL: 'https://your-manifest-url.com/manifest.json',
    }),
  ]);

  const walletCore = computed(() => new WalletCore(wallets.value, ['Petra']));
  const address = ref('');
  const autoconnect = useStorage('autoconnect', true);

  const init = async () => {
    if (autoconnect.value) {
      connect();
    }
  };

  const connect = async () => {
    console.log(wallets.value, network.value);
    await walletCore.value.connect(wallets.value[0].name);
    const result: any = walletCore.value.account;
    address.value = result.address;
  };

  const disconnect = async () => {
    await walletCore.value.disconnect();
    address.value = '';
  };

  const hash = ref('');
  const submitHandler = async () => {
    try {
      const result: any = await walletCore.value.signAndSubmitTransaction({
        data: {
          function: '0x1::coin::transfer',
          typeArguments: [APTOS_COIN],
          functionArguments: [address.value, Math.floor(Math.random() * 1000)],
        },
      });
      hash.value = result.hash;

      setTimeout(() => {
        hash.value = '';
      }, 5000);
    } catch (e: any) {
      alert(e);
      console.dir(e);
    }
  };

  init();
</script>

<style scoped></style>
