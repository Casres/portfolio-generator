







var profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArgs => {
    
    profileDataArgs.forEach(profileItem => console.log(profileItem));

};

printProfileData(profileDataArgs);