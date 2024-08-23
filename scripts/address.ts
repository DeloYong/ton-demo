import { Address } from "@ton/core";

const rawAddress = 'a3935861f79daf59a13d6d182e1640210c02f98e3df18fda74b8f5ab141abf18';
const workchain = 0; // Workchain 0

// 创建 Address 实例
const address = new Address(workchain, Buffer.from(rawAddress, 'hex'));

// 转换为用户友好的格式
const userFriendlyAddress = address.toString({ urlSafe: true });

console.log('User-Friendly Address:', userFriendlyAddress);
