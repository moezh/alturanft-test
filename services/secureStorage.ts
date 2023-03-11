import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";

export async function savePrivateKey(value: string) {
  await setItemAsync("pkey", value);
}

export async function getPrivateKey() {
  return await getItemAsync("pkey");
}

export async function deletePrivateKey() {
  return await deleteItemAsync("pkey");
}
