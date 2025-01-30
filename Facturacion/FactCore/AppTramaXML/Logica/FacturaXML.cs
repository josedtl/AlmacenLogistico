using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.Ports;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using static AppTramaXML.TramaXML;

namespace AppTramaXML
{
    public class FacturaXML
    {
        static void Main(string[] args)
        {
            //decimal numero = 0.9m;
            //string resultado = NumeroALetras(numero);
            //Console.WriteLine(resultado);


            FacturaEntity Item_CP_Cabecera = new FacturaEntity();

            Item_CP_Cabecera.m_Serie = "FFF1";
            Item_CP_Cabecera.m_Correlativo = "1";
            Item_CP_Cabecera.m_CodigoFactura = "FFF1" + "-" + "1";

            //Datos de Emisor
            Item_CP_Cabecera.m_NumDocumentoEmpresaEmite = "10728110771";
            Item_CP_Cabecera.m_NomEmpresaEmite = "TIMO LUGO DAVID JOSE";

            //catalogo01 TipoDocumento
            Item_CP_Cabecera.m_CodigoTipoDocumento = "01";

            //catalogo01 TipoOperacion 51
            Item_CP_Cabecera.m_CodigoTipoOperacion = "0101";


            //No. 52 Catálogo    Códigos de leyendas
            Item_CP_Cabecera.m_CodigoLeyenda = "1000";
            Item_CP_Cabecera.m_LetraImporte = "SETECIENTOS OCHO CON 00/100 SOLES";


            //CLiente
            Item_CP_Cabecera.m_NumCliente = "20600695771";
            //catalogo06
            Item_CP_Cabecera.m_CodigoTipoDocumentoCliente = "6";
            Item_CP_Cabecera.m_NomCliente = "NUBEFACT SA";
            Item_CP_Cabecera.m_Direccion = "CALLE LIBERTAD 116 MIRAFLORES - LIMA - PERU";

            //Forma de Pago
            Item_CP_Cabecera.m_FormaPago = "Contado";


            //Codigo de Tributo catalogo05

            Item_CP_Cabecera.m_CodTributo = "1000";
            Item_CP_Cabecera.m_CodInternacionalTributo = "VAT";
            Item_CP_Cabecera.m_NomTributo = "IGV";


            //Codigo de Moneda 
            Item_CP_Cabecera.m_CodigoMoneda = "PEN";


            //Tipo de Precio catalogo16
            Item_CP_Cabecera.m_CodigoTipoPrecio = "01";


            List<FacturaDetalleEntity> Detalle = new List<FacturaDetalleEntity>();


            /////////////1 Detalle  DETALLE DE PRODUCTO


            FacturaDetalleEntity Item1 = new FacturaDetalleEntity();



            Item1.mD1_Numeracion = "1";
            Item1.mD1_PrecioUnitario = 500.ToString("N2");
            Item1.mD1_Cantidad = 1.ToString("N1");
            Item1.mD1_SumaCantidadPrecio = (500 * 1).ToString("N2");
            Item1.mD1_PrecioConImpuesto = 590.ToString("N2");
            Item1.mD1_ImpuestoSolo = 90.ToString("N2");
            //Afectacion del IGV catalogo07
            Item1.mD1_CodigoTipoAfectacionIGV = "10";
            Item1.mD1_Porcentaje = "18.00";
            //Codigo de Tributo catalogo05
            Item1.mD1_CodTributo = "1000";
            Item1.mD1_CodInternacionalTributo = "VAT";
            Item1.mD1_NomTributo = "IGV";
            Item1.mD1_PrecioUnitarioUnDecimal = 500.ToString("N1");
            Item1.mD1_CodUnidadMedida = "NIU";
            Item1.mD1_DetalleConcepto = "DETALLE DEL PRODUCTO";
            Item1.mD1_CodigoDetalleConcepto = "001";
            Detalle.Add(Item1);

            /////////////2 Detalle  DETALLE DE PRODUCTO
            FacturaDetalleEntity Item2 = new FacturaDetalleEntity();

            Item2.mD1_Numeracion = "2";
            Item2.mD1_PrecioUnitario = 20.ToString("N2");
            Item2.mD1_Cantidad = 5.ToString("N1");

            Item2.mD1_SumaCantidadPrecio = (20 * 5).ToString("N2");

            Item2.mD1_PrecioConImpuesto = 23.6.ToString("N2");
            Item2.mD1_ImpuestoSolo = 18.ToString("N2");
            //Afectacion del IGV catalogo07
            Item2.mD1_CodigoTipoAfectacionIGV = "10";
            Item2.mD1_Porcentaje = "18.00";
            //Codigo de Tributo catalogo05
            Item2.mD1_CodTributo = "1000";
            Item2.mD1_CodInternacionalTributo = "VAT";
            Item2.mD1_NomTributo = "IGV";
            Item2.mD1_PrecioUnitarioUnDecimal = 20.ToString("N1");
            Item2.mD1_CodUnidadMedida = "ZZ";
            Item2.mD1_DetalleConcepto = "DETALLE DEL SERVICIO";
            Item2.mD1_CodigoDetalleConcepto = "001";
            Detalle.Add(Item2);

            List<InvoiceLine> DetalleXml = new List<InvoiceLine>();
            foreach (var i in Detalle)
            {

                var xmlItem = AgregarDetalleXML(Item_CP_Cabecera, i);
                DetalleXml.Add(xmlItem);
            }


            String TotalPrecioBruto = 600.ToString("N2");
            String TotalPrecioNeto = 708.ToString("N2");
            String TotalImpuesto = (90 + 18).ToString("N2");





            var ItemFactura = new Invoice
            {
                UBLVersionID = "2.1",
                CustomizationID = "2.0",
                ID = new ID { Value = Item_CP_Cabecera.m_CodigoFactura },
                IssueDate = DateTime.Now.ToString("yyyy-MM-dd"),
                IssueTime = DateTime.Now.ToString("hh:mm:ss"),
                InvoiceTypeCode = new InvoiceTypeCode
                {

                    ListAgencyName = "PE:SUNAT",
                    ListSchemeURI = "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo51",
                    Name = "Tipo de Operacion",
                    ListID = Item_CP_Cabecera.m_CodigoTipoOperacion,
                    ListURI = "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01",
                    ListName = "Tipo de Documento",
                    Value = Item_CP_Cabecera.m_CodigoTipoDocumento
                },
                Note = new Note
                {   //No. 52 Catálogo    Códigos de leyendas
                    LanguageLocaleID = Item_CP_Cabecera.m_CodigoLeyenda,
                    Value = Item_CP_Cabecera.m_LetraImporte
                },
                DocumentCurrencyCode = new DocumentCurrencyCode
                {
                    ListID = "ISO 4217 Alpha",
                    ListAgencyName = "United Nations Economic Commission for Europe",
                    ListName = "Currency",
                    Value = Item_CP_Cabecera.m_CodigoMoneda
                },
                DespatchDocumentReference = new DespatchDocumentReference
                {
                    ID = new ID { Value = "0001-23" },
                    DocumentTypeCode = new DocumentTypeCode
                    {
                        ListAgencyName = "PE:SUNAT",
                        ListName = "Tipo de Documento",
                        ListURI = "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01",
                        Value = "09"
                    }
                },
                Signature = new Signature
                {
                    ID = new ID { Value = Item_CP_Cabecera.m_NumDocumentoEmpresaEmite },
                    Note = new Note { Value = "WWW.NUBEFACT.COM" },
                    SignatoryParty = new SignatoryParty
                    {
                        PartyIdentification = new PartyIdentification
                        {
                            ID = new ID { Value = Item_CP_Cabecera.m_NumDocumentoEmpresaEmite }
                        },
                        PartyName = new PartyName
                        {
                            Name = Item_CP_Cabecera.m_NomEmpresaEmite
                        }
                    },
                    DigitalSignatureAttachment = new DigitalSignatureAttachment
                    {

                        ExternalReference = new ExternalReference
                        {
                            URI = Item_CP_Cabecera.m_NumDocumentoEmpresaEmite
                        }
                    }
                },

                AccountingSupplierParty = new AccountingSupplierParty
                {
                    Party = new Party
                    {
                        PartyIdentification = new PartyIdentification
                        {
                            ID = new ID
                            {
                                schemeID = "6",
                                schemeName = "Documento de Identidad",
                                schemeAgencyName = "PE:SUNAT",
                                schemeURI = "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06",
                                Value = Item_CP_Cabecera.m_NumDocumentoEmpresaEmite
                            }
                        },
                        PartyName = new PartyName
                        {

                            Name = Item_CP_Cabecera.m_NomEmpresaEmite
                        },
                        PartyLegalEntity = new PartyLegalEntity
                        {
                            RegistrationName = Item_CP_Cabecera.m_NomEmpresaEmite,
                            RegistrationAddress = new RegistrationAddress
                            {
                                ID = new ID
                                {
                                    schemeName = "Ubigeos",
                                    schemeAgencyName = "PE:INEI",
                                    Value = "000000",
                                },
                                AddressTypeCode = new AddressTypeCode
                                {
                                    listAgencyName = "PE:SUNAT",
                                    listName = "Establecimientos anexos",
                                    Value = "0000"
                                },
                                CityName = "-",
                                CountrySubentity = "-",
                                District = "-",
                                AddressLine = new AddressLine
                                {
                                    Line = "-"
                                },
                                Country = new Country
                                {
                                    IDentificationCode = new IDentificationCode
                                    {
                                        listID = "ISO 3166-1",
                                        listAgencyName = "United Nations Economic Commission for Europe",
                                        listName = "Country",
                                        Value = "PE"
                                    }

                                }


                            }

                        }

                    },
                }
                ,
                AccountingCustomerParty = new AccountingCustomerParty
                {

                    Party = new Party
                    {
                        PartyIdentification = new PartyIdentification
                        {

                            ID = new ID
                            {

                                schemeAgencyName = "PE:SUNAT",
                                schemeURI = "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06",
                                schemeName = "Documento de Identidad",
                                schemeID = Item_CP_Cabecera.m_CodigoTipoDocumentoCliente,
                                Value = Item_CP_Cabecera.m_NumCliente
                            }
                        },
                        PartyLegalEntity = new PartyLegalEntity
                        {

                            RegistrationName = Item_CP_Cabecera.m_NomCliente,
                            RegistrationAddress = new RegistrationAddress
                            {
                                AddressLine = new AddressLine
                                {
                                    Line = Item_CP_Cabecera.m_Direccion
                                }
                            }
                        }

                    }

                }
                ,
                PaymentTerms = new PaymentTerms
                {
                    ID = new ID { Value = "FormaPago" },
                    PaymentMeansID = Item_CP_Cabecera.m_FormaPago
                },
                TaxTotal = new TaxTotal
                {
                    TaxAmount = new TaxAmount
                    {
                        CurrencyID = Item_CP_Cabecera.m_CodigoMoneda,
                        Value = TotalImpuesto
                    },
                    TaxSubtotal = new TaxSubtotal
                    {
                        TaxableAmount = new TaxableAmount
                        {
                            CurrencyID = Item_CP_Cabecera.m_CodigoMoneda,
                            Value = TotalPrecioBruto,
                        },
                        TaxAmount = new TaxAmount
                        {
                            CurrencyID = Item_CP_Cabecera.m_CodigoMoneda,
                            Value = TotalImpuesto
                        },
                        TaxCategory = new TaxCategory
                        {
                            TaxScheme = new TaxScheme
                            {
                                ID = new ID
                                {
                                    schemeName = "Codigo de tributos",
                                    schemeAgencyName = "PE:SUNAT",
                                    schemeURI = "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05",
                                    Value = Item_CP_Cabecera.m_CodTributo
                                },
                                Name = Item_CP_Cabecera.m_NomTributo,
                                TaxTypeCode = Item_CP_Cabecera.m_CodInternacionalTributo
                            }

                        }

                    }


                },
                LegalMonetaryTotal = new LegalMonetaryTotal
                {
                    LineExtensionAmount = new LineExtensionAmount { CurrencyID = Item_CP_Cabecera.m_CodigoMoneda, Value = TotalPrecioBruto },
                    TaxInclusiveAmount = new TaxInclusiveAmount { CurrencyID = Item_CP_Cabecera.m_CodigoMoneda, Value = TotalPrecioNeto },
                    AllowanceTotalAmount = new AllowanceTotalAmount { CurrencyID = Item_CP_Cabecera.m_CodigoMoneda, Value = "0.00" },
                    ChargeTotalAmount = new ChargeTotalAmount { CurrencyID = Item_CP_Cabecera.m_CodigoMoneda, Value = "0.00" },
                    PrepaidAmount = new PrepaidAmount { CurrencyID = Item_CP_Cabecera.m_CodigoMoneda, Value = "0.00" },
                    PayableAmount = new PayableAmount { CurrencyID = Item_CP_Cabecera.m_CodigoMoneda, Value = TotalPrecioNeto }
                },
                InvoiceLine = DetalleXml


            };

            // Especificar la carpeta de destino

            string folderPath = @"C:\XML";

            // Asegurarse de que la carpeta exista
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            // Especificar el nombre del archivo
            string filePath = Path.Combine(folderPath, Item_CP_Cabecera.m_CodigoFactura + ".xml");

            // Serializar el objeto a XML y guardarlo en el archivo
            XmlSerializer serializer = new XmlSerializer(typeof(Invoice));
            using (StreamWriter writer = new StreamWriter(filePath))
            {
                serializer.Serialize(writer, ItemFactura);
            }

            Console.WriteLine("Archivo XML generado y guardado en " + filePath);

        }

        public static InvoiceLine AgregarDetalleXML(FacturaEntity Item_CP_Cabecera, FacturaDetalleEntity _detalle)
        {
            InvoiceLine invoiceLine = new InvoiceLine
            {
                ID = new ID
                {
                    Value = _detalle.mD1_Numeracion
                },
                InvoicedQuantity = new InvoicedQuantity
                {
                    UnitCode = _detalle.mD1_CodUnidadMedida,
                    UnitCodeListID = "UN/ECE rec 20",
                    UnitCodeListAgencyName = "United Nations Economic Commission for Europe",
                    Value = _detalle.mD1_Cantidad
                },
                LineExtensionAmount = new LineExtensionAmount
                {
                    CurrencyID = Item_CP_Cabecera.m_CodigoMoneda,
                    Value = _detalle.mD1_SumaCantidadPrecio
                },
                PricingReference = new PricingReference
                {
                    AlternativeConditionPrice = new AlternativeConditionPrice
                    {
                        PriceAmount = new PriceAmount { CurrencyID = Item_CP_Cabecera.m_CodigoMoneda, Value = _detalle.mD1_PrecioConImpuesto },
                        PriceTypeCode = new PriceTypeCode
                        {
                            listAgencyName = "PE:SUNAT",
                            listName = "Tipo de Precio",
                            listURI = "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16",
                            Value = Item_CP_Cabecera.m_CodigoTipoPrecio

                        }
                    }
                },
                TaxTotal = new TaxTotal
                {

                    TaxAmount = new TaxAmount
                    {
                        CurrencyID = Item_CP_Cabecera.m_CodigoMoneda,
                        Value = _detalle.mD1_ImpuestoSolo
                    },
                    TaxSubtotal = new TaxSubtotal
                    {
                        TaxableAmount = new TaxableAmount
                        {
                            CurrencyID = Item_CP_Cabecera.m_CodigoMoneda,
                            Value = _detalle.mD1_PrecioUnitario
                        },
                        TaxAmount = new TaxAmount
                        {
                            CurrencyID = Item_CP_Cabecera.m_CodigoMoneda,
                            Value = _detalle.mD1_ImpuestoSolo
                        },
                        TaxCategory = new TaxCategory
                        {
                            Percent = _detalle.mD1_Porcentaje,
                            TaxExemptionReasonCode = new TaxExemptionReasonCode
                            {
                                listAgencyName = "PE:SUNAT",
                                listName = "Afectacion del IGV",
                                listURI = "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07",
                                Value = _detalle.mD1_CodigoTipoAfectacionIGV
                            },
                            TaxScheme = new TaxScheme
                            {
                                ID = new ID
                                {
                                    schemeName = "Codigo de tributos",
                                    schemeAgencyName = "PE:SUNAT",
                                    schemeURI = "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05",
                                    Value = _detalle.mD1_CodTributo
                                },
                                Name = _detalle.mD1_NomTributo,
                                TaxTypeCode = _detalle.mD1_CodInternacionalTributo
                            }
                        }

                    }
                },
                Item = new Item
                {

                    Description = _detalle.mD1_DetalleConcepto,
                    SellersItemIdentification = new SellersItemIdentification
                    {
                        ID = new ID { Value = _detalle.mD1_CodigoDetalleConcepto }
                    }
                },
                Price = new Price
                {
                    PriceAmount = new PriceAmount
                    {
                        CurrencyID = Item_CP_Cabecera.m_CodigoMoneda,
                        Value = _detalle.mD1_PrecioUnitarioUnDecimal
                    }
                }

            };



            return invoiceLine;
        }
        
        static string NumeroALetras(decimal numero)
        {
            string[] unidades = { "", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE" };
            string[] decenas = { "", "DIEZ", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA" };
            string[] centenas = { "", "CIENTO", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS" };

            string DecenasUnidades(int n)
            {
                if (n < 10)
                {
                    return unidades[n];
                }
                else if (n <= 19)
                {
                    string[] especiales = { "DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISEIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE" };
                    return especiales[n - 10];
                }
                else if (n < 30)
                {
                    return n == 20 ? "VEINTE" : "VEINTI" + unidades[n - 20];
                }
                else
                {
                    int d = n / 10;
                    int u = n % 10;
                    return decenas[d] + (u > 0 ? " Y " + unidades[u] : "");
                }
            }

            string CentenasDecenasUnidades(int n)
            {
                if (n == 100) return "CIEN"; // Caso especial para "CIEN"
                int c = n / 100;
                int d_u = n % 100;
                return (centenas[c] + " " + DecenasUnidades(d_u)).Trim();
            }

            string Miles(int n)
            {
                if (n == 0)
                    return "";
                if (n == 1)
                    return "MIL";
                else
                    return CentenasDecenasUnidades(n) + " MIL";
            }

            string Millones(int n)
            {
                if (n == 0)
                    return "";
                if (n == 1)
                    return "UN MILLON";
                else
                    return CentenasDecenasUnidades(n) + " MILLONES";
            }

            int millones = (int)(numero / 1000000);
            int miles = (int)((numero % 1000000) / 1000);
            int resto = (int)(numero % 1000);
            int centavos = (int)((numero - (int)numero) * 100);

            string millonesTexto = Millones(millones);
            string milesTexto = Miles(miles);
            string restoTexto = CentenasDecenasUnidades(resto);
            string centavosTexto = $"{centavos:00}/100";

            return $"{millonesTexto} {milesTexto} {restoTexto} CON {centavosTexto}".Trim();

        }
    }


}
