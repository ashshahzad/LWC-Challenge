// public with sharing class AccountController {
//     @AuraEnabled(cacheable=true)
//     public static List<Account> getAccounts(String searchKey) {
//             return [
//                 SELECT Id, Name,Email, Website FROM Account
//                 WHERE Name LIKE : searchKey
//                 ORDER BY Name LIMIT 200
//                 ];
//     }
// }
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String searchKey) {
        String searchPattern = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Phone, Website
            FROM Account
            WHERE Name LIKE :searchPattern
            ORDER BY Name
            LIMIT 200
        ];
    }
}
