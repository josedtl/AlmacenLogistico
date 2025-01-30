using System;
using System.Collections.Generic;
using System.Xml.Serialization;

namespace AppXML
{
 

    [XmlRoot("Invoice", Namespace = "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2")]
    public class Invoice
    {
        [XmlNamespaceDeclarations]
        public XmlSerializerNamespaces xmlns = new XmlSerializerNamespaces();

        public Invoice()
        {
            xmlns.Add("xsi", "http://www.w3.org/2001/XMLSchema-instance");
            xmlns.Add("xsd", "http://www.w3.org/2001/XMLSchema");
            xmlns.Add("cac", "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2");
            xmlns.Add("cbc", "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2");
            xmlns.Add("ccts", "urn:un:unece:uncefact:documentation:2");
            xmlns.Add("ds", "http://www.w3.org/2000/09/xmldsig#");
            xmlns.Add("ext", "urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2");
            xmlns.Add("qdt", "urn:oasis:names:specification:ubl:schema:xsd:QualifiedDatatypes-2");
            xmlns.Add("udt", "urn:un:unece:uncefact:data:specification:UnqualifiedDataTypesSchemaModule:2");
        }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string UBLVersionID { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string CustomizationID { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public ID ID { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public String IssueDate { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string IssueTime { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public InvoiceTypeCode InvoiceTypeCode { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public Note Note { get; set; } = new Note(); 

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public DocumentCurrencyCode DocumentCurrencyCode { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public DespatchDocumentReference DespatchDocumentReference { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public Signature Signature { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public AccountingSupplierParty AccountingSupplierParty { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public AccountingCustomerParty AccountingCustomerParty { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public PaymentTerms PaymentTerms { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public TaxTotal TaxTotal { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public LegalMonetaryTotal LegalMonetaryTotal { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public List<InvoiceLine> InvoiceLine { get; set; }
    }

    public class InvoiceTypeCode
    {
        [XmlAttribute("listID")]
        public string ListID { get; set; }

        [XmlAttribute("listAgencyName")]
        public string ListAgencyName { get; set; }

        [XmlAttribute("listName")]
        public string ListName { get; set; }

        [XmlAttribute("listURI")]
        public string ListURI { get; set; }

        [XmlAttribute("name")]
        public string Name { get; set; }

        [XmlAttribute("listSchemeURI")]
        public string ListSchemeURI { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class Note
    {
        [XmlAttribute("languageLocaleID")]
        public string LanguageLocaleID { get; set; } 

        [XmlText]
        public string Value { get; set; } 


    }

    public class DocumentCurrencyCode
    {
        [XmlAttribute("listID")]
        public string ListID { get; set; }

        [XmlAttribute("listAgencyName")]
        public string ListAgencyName { get; set; }

        [XmlAttribute("listName")]
        public string ListName { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class DespatchDocumentReference
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public ID ID { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public DocumentTypeCode DocumentTypeCode { get; set; }
    }

    public class DocumentTypeCode
    {
        [XmlAttribute("listAgencyName")]
        public string ListAgencyName { get; set; }

        [XmlAttribute("listName")]
        public string ListName { get; set; }

        [XmlAttribute("listURI")]
        public string ListURI { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class Signature
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public ID ID { get; set; }

        [XmlElement( Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]

        public Note Note { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public SignatoryParty SignatoryParty { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public DigitalSignatureAttachment DigitalSignatureAttachment { get; set; }
    }

    public class SignatoryParty
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public PartyIdentification PartyIdentification { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public PartyName PartyName { get; set; }
    }

    public class PartyIdentification
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public ID ID { get; set; }
    }

    public class PartyName
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string Name { get; set; }
    }

    public class DigitalSignatureAttachment
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public ExternalReference ExternalReference { get; set; }
    }

    public class ExternalReference
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string URI { get; set; }
    }

    public class AccountingSupplierParty
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public Party Party { get; set; }
    }

    public class Party
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public PartyIdentification PartyIdentification { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public PartyName PartyName { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public PartyLegalEntity PartyLegalEntity { get; set; }
    }

    public class PartyLegalEntity
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string RegistrationName { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public RegistrationAddress RegistrationAddress { get; set; }
    }

    public class RegistrationAddress
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public ID ID { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public AddressTypeCode AddressTypeCode { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string CityName { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string CountrySubentity { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string District { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public AddressLine AddressLine { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public Country Country { get; set; }
    }

    public class AddressLine
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string Line { get; set; }
    }

    public class Country
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public IDentificationCode IDentificationCode { get; set; }
    }

    public class AccountingCustomerParty
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public Party Party { get; set; }
    }

    public class PaymentTerms
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public ID ID { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string PaymentMeansID { get; set; }
    }

    public class TaxTotal
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public TaxAmount TaxAmount { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public TaxSubtotal TaxSubtotal { get; set; }
    }

    public class TaxAmount
    {
        [XmlAttribute("currencyID")]
        public string CurrencyID { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class TaxSubtotal
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public TaxableAmount TaxableAmount { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public TaxAmount TaxAmount { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public TaxCategory TaxCategory { get; set; }
    }

    public class TaxableAmount
    {
        [XmlAttribute("currencyID")]
        public string CurrencyID { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class TaxCategory
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string Percent { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public TaxExemptionReasonCode TaxExemptionReasonCode { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public TaxScheme TaxScheme { get; set; }
    }

    public class TaxScheme
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public ID ID { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string Name { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string TaxTypeCode { get; set; }
    }

    public class LegalMonetaryTotal
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public LineExtensionAmount LineExtensionAmount { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public TaxInclusiveAmount TaxInclusiveAmount { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public AllowanceTotalAmount AllowanceTotalAmount { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public ChargeTotalAmount ChargeTotalAmount { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public PrepaidAmount PrepaidAmount { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public PayableAmount PayableAmount { get; set; }
    }

    public class LineExtensionAmount
    {
        [XmlAttribute("currencyID")]
        public string CurrencyID { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class TaxInclusiveAmount
    {
        [XmlAttribute("currencyID")]
        public string CurrencyID { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class AllowanceTotalAmount
    {
        [XmlAttribute("currencyID")]
        public string CurrencyID { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class ChargeTotalAmount
    {
        [XmlAttribute("currencyID")]
        public string CurrencyID { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class PrepaidAmount
    {
        [XmlAttribute("currencyID")]
        public string CurrencyID { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class PayableAmount
    {
        [XmlAttribute("currencyID")]
        public string CurrencyID { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class InvoiceLine
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public ID ID { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public InvoicedQuantity InvoicedQuantity { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public LineExtensionAmount LineExtensionAmount { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public PricingReference PricingReference { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public TaxTotal TaxTotal { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public Item Item { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public Price Price { get; set; }
    }

    public class InvoicedQuantity
    {
        [XmlAttribute("unitCode")]
        public string UnitCode { get; set; }

        [XmlAttribute("unitCodeListID")]
        public string UnitCodeListID { get; set; }

        [XmlAttribute("unitCodeListAgencyName")]
        public string UnitCodeListAgencyName { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class PricingReference
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public AlternativeConditionPrice AlternativeConditionPrice { get; set; }
    }

    public class AlternativeConditionPrice
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public PriceAmount PriceAmount { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public PriceTypeCode PriceTypeCode { get; set; }
    }

    public class PriceAmount
    {
        [XmlAttribute("currencyID")]
        public string CurrencyID { get; set; }

        [XmlText]
        public string Value { get; set; }
    }

    public class Item
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public string Description { get; set; }

        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2")]
        public SellersItemIdentification SellersItemIdentification { get; set; }
    }

    public class SellersItemIdentification
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public ID ID { get; set; }
    }

    public class Price
    {
        [XmlElement(Namespace = "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2")]
        public PriceAmount PriceAmount { get; set; }
    }
    public class ID
    {
        [XmlAttribute("schemeID")]
        public string schemeID { get; set; }

        [XmlAttribute("schemeName")]
        public string schemeName { get; set; }

        [XmlAttribute("schemeAgencyName")]
        public string schemeAgencyName { get; set; }
        [XmlAttribute("schemeURI")]
        public string schemeURI { get; set; }
        [XmlText]
        public string Value { get; set; }
    }



    public class AddressTypeCode
    {
        [XmlAttribute("listAgencyName")]
        public string listAgencyName { get; set; }

        [XmlAttribute("listName")]
        public string listName { get; set; }
        [XmlText]
        public string Value { get; set; }

    }

    public class IDentificationCode
    {
        [XmlAttribute("listID")]
        public string listID { get; set; }

        [XmlAttribute("listAgencyName")]
        public string listAgencyName { get; set; }

        [XmlAttribute("listName")]
        public string listName { get; set; }

        [XmlText]
        public string Value { get; set; }

    }
    public class PriceTypeCode
    {
        [XmlAttribute("listAgencyName")]
        public string listAgencyName { get; set; }

        [XmlAttribute("listName")]
        public string listName { get; set; }
        
        [XmlAttribute("listURI")]
        public string listURI { get; set; }

        [XmlText]
        public string Value { get; set; }

    }

 public class TaxExemptionReasonCode
    {
        [XmlAttribute("listAgencyName")]
        public string listAgencyName { get; set; }

        [XmlAttribute("listName")]
        public string listName { get; set; }
        
        [XmlAttribute("listURI")]
        public string listURI { get; set; }

        [XmlText]
        public string Value { get; set; }

    }
}
