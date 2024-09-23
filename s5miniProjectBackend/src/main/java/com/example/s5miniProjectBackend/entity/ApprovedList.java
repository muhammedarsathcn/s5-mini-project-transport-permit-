package com.example.s5miniProjectBackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class ApprovedList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String vehicleNo;
    private String licenseNo;
    private Integer no_of_days;
    private String fromPlace;
    private String toPlace;
    private String fromDate;
    private String toDate;
    private String vehicleMode;
    private String amount;
    private String status = "Initiated";

    public ApprovedList(long id, String name, String vehicleNo, String licenseNo, Integer no_of_days, String fromPlace, String toPlace, String fromDate, String toDate, String vehicleMode, String amount, String status) {
        this.id = id;
        this.name = name;
        this.vehicleNo = vehicleNo;
        this.licenseNo = licenseNo;
        this.no_of_days = no_of_days;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.vehicleMode = vehicleMode;
        this.amount = amount;
        this.status = status;
    }

    public ApprovedList() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVehicleNo() {
        return vehicleNo;
    }

    public void setVehicleNo(String vehicleNo) {
        this.vehicleNo = vehicleNo;
    }

    public String getLicenseNo() {
        return licenseNo;
    }

    public void setLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
    }

    public Integer getNo_of_days() {
        return no_of_days;
    }

    public void setNo_of_days(Integer no_of_days) {
        this.no_of_days = no_of_days;
    }

    public String getFromPlace() {
        return fromPlace;
    }

    public void setFromPlace(String fromPlace) {
        this.fromPlace = fromPlace;
    }

    public String getToPlace() {
        return toPlace;
    }

    public void setToPlace(String toPlace) {
        this.toPlace = toPlace;
    }

    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    public String getToDate() {
        return toDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }

    public String getVehicleMode() {
        return vehicleMode;
    }

    public void setVehicleMode(String vehicleMode) {
        this.vehicleMode = vehicleMode;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
