package helpers;

public class Auth {

    private static DB db = DB.getInstances();

    private Auth() {

    }

    public static boolean authCheck(String userName, String password) {
        String hashPassword = Hashing.getHash(password);

        String[] userCheck = db.dbAuthCheck(userName);

        return userName.equals(userCheck[0]) && hashPassword.equals(userCheck[1]);
    }
}
