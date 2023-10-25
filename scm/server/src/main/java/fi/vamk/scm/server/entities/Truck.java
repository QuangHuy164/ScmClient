package fi.vamk.scm.server.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the truck database table.
 * 
 */
@Entity
@NamedQuery(name="Truck.findAll", query="SELECT t FROM Truck t")
public class Truck implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	@Column(name="license_plate")
	private String licensePlate;

	private String name;

	public Truck() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLicensePlate() {
		return this.licensePlate;
	}

	public void setLicensePlate(String licensePlate) {
		this.licensePlate = licensePlate;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}