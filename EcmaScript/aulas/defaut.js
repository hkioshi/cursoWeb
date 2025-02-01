function defout(a = 'defaut de a', b = 'defaut de b') {
    console.log(`${a} | ${b}`);
}

defout(); // defaut de a defaut de b
defout('novo valor de a'); // novo valor de a defaut de b
defout('novo valor de a', 'novo valor de b'); // novo valor de a novo valor de b
defout(undefined, 'novo valor de b'); // defaut de a novo valor de b