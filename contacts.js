
import fs from 'fs/promises';
import path from 'path';

const contactsPath = path.join('db','contacts.json');

async function listContacts() {
 try{
     const data = await fs.readFile(contactsPath, "utf8" );
     const result = JSON.parse(data.toString());
     console.table(result)
 } catch (error) {
     console.error(error)
 }
};


async function getContactById(contactId) {
try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data.toString());
    const receiveContact = result.find(
        ({id}) => id.toString() === contactId,
    );
    console.log(receiveContact);
} catch (error){
    console.log(error)
}
}
  

async function removeContact(contactId) {
try {
    const data = await fs.readFile(contactsPath, "utf8" );
    const result = JSON.parse(data.toString());
    const newResult = result.filter(
        contact => contact.id.toString() !== contactId,
    );
    console.log(newResult);
    fs.writeFile(contactsPath, JSON.stringify(newResult));
} catch (error){
    console.log(error)
 }
}


 async function addContact(name, email, phone) {
    try{
        const data = await fs.readFile(contactsPath);
        const result = JSON.parse(data.toString());
        const newContact = [
            ...result,
            {
                id: result.length + 1,
                name:name,
                email:email,
                phone:phone,
            },
        ];
        console.log(newContact);
        fs.writeFile(contactsPath, JSON.stringify(newContact));
    } catch (error) {
        console.error(error)
    }
}

export { listContacts,
     getContactById,
      removeContact,
       addContact };