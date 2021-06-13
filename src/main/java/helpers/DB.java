package helpers;

import java.sql.*;

public class DB {

	// ATTRIBUTES
	private static DB db = new DB();
	private PropertiesReader propsR = PropertiesReader.getInstances();
	private Connection conn;
	private Statement stmt;
	private ResultSet rs;
	private PreparedStatement pstmt;

	// CONSTRUCTOR
	public DB() {
		try {
			Class.forName(propsR.getValue("myDriver"));
			conn = DriverManager.getConnection(propsR.getValue("myUrlDB"), propsR.getValue("myUserDB"),
					propsR.getValue("myPassDB"));

			System.out.println("Conexion Establecida\n");
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	// STATIC METHOD - getInstances()
	public static DB getInstances() {
		return db;
	}

	// METHOD - dbAuthCheck()
	public String[] dbAuthCheck(String userName) {
		String[] user = new String[2];
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery("select nomUsuario, contrasenia from usuarios where nomUsuario = '" + userName + "'");

			if (rs == null) {
				System.out.println("Usuario Inexistente");
				user[0] = null;
				user[1] = null;

				return user;
			} else {
				while (rs.next()) {
					System.out.println(rs.getString(1) + "\t" + rs.getString(2));
					user[0] = rs.getString(1);
					user[1] = rs.getString(2);
				}
				return user;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				rs.close();
				stmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return user;
	}

	// METHOD - dbSelectQuery
	public void dbSelectQuery(String query) {
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(query);

			while (rs.next()) {
				System.out.println(rs.getString(1) + "\t" + rs.getString(2) + "\t" + rs.getString(3));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				rs.close();
				stmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	// METHOD - dbPreparedStatement()
	public int dbInsertQuery(String query, Object[] usuario) {
		try {
			pstmt = conn.prepareStatement(query);
			/*pstmt.setObject(1, usuario[0]);
			pstmt.setObject(2, usuario[1]);
			pstmt.setObject(3, usuario[2]);
			pstmt.setObject(4, usuario[3]);
			pstmt.setObject(5, null);*/

			for(int i = 0; i < usuario.length; i++) {
				pstmt.setObject(i + 1, usuario[i]);
			}

			return pstmt.executeUpdate();

			/*
			 * if(pstmt.executeUpdate() == 0) {
			 * System.out.println("Usuario No Ingresado\n"); } else {
			 * System.out.println("Usuario Ingresado Correctamente\n"); }
			 */
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				pstmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return 0;
	}

	// METHOD - dbUpdateQuery()
	public void dbUpdateQuery(String query, Object[] user) {
		try {
			pstmt = conn.prepareStatement(query);
			//pstmt.setString(1, name);
			//pstmt.setInt(2, ID);

			for(int i = 0; i < user.length; i++){
				pstmt.setObject(i+1, user[i]);
			}

			if (pstmt.executeUpdate() == 0) {
				System.out.println("Usuario No Actualizado\n");
			} else {
				System.out.println("Usuario Actualizado\n");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				pstmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	public void dbDeleteQuery(String query, int ID) {
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, ID);

			if (pstmt.executeUpdate() == 0) {
				System.out.println("Usuario No Eliminado\n");
			} else {
				System.out.println("Usuario Eliminado Correctamente\n");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				pstmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

	// METHOD - dbClose()
	public void dbClose() {
		try {
			conn.close();
			System.out.println("Conexion Cerrada\n");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
