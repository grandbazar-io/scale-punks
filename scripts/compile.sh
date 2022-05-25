#!/bin/bash
if [ ! -f ../.env ]
then
  export $(cat .env | xargs)
fi

contracts=("PunksCollection" "PunksNft")
compiledFolder="compiled"

for i in ${!contracts[*]}
do
  rm "${compiledFolder}/${contracts[$i]}.abi.json" "${compiledFolder}/${contracts[$i]}.code" "${compiledFolder}/${contracts[$i]}.tvc" "${compiledFolder}/${contracts[$i]}Contract.js"
  solc "contracts/${contracts[$i]}.sol" -o compiled --include-path ../node_modules
  tvm_linker compile --abi-json "${compiledFolder}/${contracts[$i]}.abi.json" "${compiledFolder}/${contracts[$i]}.code" --lib $STD_LIB_PATH -o "${compiledFolder}/${contracts[$i]}.tvc"
  everdev js wrap "${compiledFolder}/${contracts[$i]}.abi.json"
done